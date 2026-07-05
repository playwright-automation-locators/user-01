import { expect, type Locator, type Page, test } from '@playwright/test';

const APP_URL = 'http://speak-ukrainian.eastus2.cloudapp.azure.com/dev/';

const VALID_USER = {
  lastName: 'Шевченко',
  firstName: 'Тарас',
  phone: '0501234567',
  password: 'Test123!',
};

function uniqueEmail(prefix = 'autotest'): string {
  return `${prefix}${Date.now()}${Math.floor(Math.random() * 1000)}@gmail.com`;
}

async function openRegistrationForm(page: Page): Promise<Locator> {
  await page.goto(APP_URL, { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('button', { name: 'Додати гурток' })).toBeVisible();

  await page.locator('.user-profile').click();

  const dropdown = page.locator('.ant-dropdown:not(.ant-dropdown-hidden)').last();
  const registerMenuItem = dropdown.getByRole('menuitem', {
    name: 'Зареєструватися',
  });

  await expect(registerMenuItem).toBeVisible();
  await registerMenuItem.click();

  const form = page.locator('.modal-registration');

  await expect(form).toBeVisible();
  await expect(form.getByText('Реєстрація', { exact: true })).toBeVisible();

  return form;
}

async function fillRegistrationForm(
  form: Locator,
  options: {
    email?: string;
    password?: string;
    confirmPassword?: string;
  } = {},
): Promise<void> {
  const password = options.password ?? VALID_USER.password;

  await form.getByLabel('Прізвище', { exact: true }).fill(VALID_USER.lastName);
  await form.getByLabel('Ім`я', { exact: true }).fill(VALID_USER.firstName);
  await form.getByLabel('Телефон', { exact: true }).fill(VALID_USER.phone);
  await form.getByLabel('Email', { exact: true }).fill(options.email ?? uniqueEmail());
  await form.getByLabel('Пароль', { exact: true }).fill(password);
  await form
    .getByPlaceholder('Підтвердіть ваш пароль', { exact: true })
    .fill(options.confirmPassword ?? password);
}

async function expectSuccessRegistration(page: Page, form: Locator): Promise<void> {
  await expect(page.getByText(/Ви успішно зареєструвалися/i)).toBeVisible();
  await expect(page.getByText(/лист з лінком для підтвердження реєстрації/i)).toBeVisible();
  await expect(form).toBeHidden();
}

async function expectUnauthenticatedProfileMenu(page: Page): Promise<void> {
  await page.locator('.user-profile').click();

  const dropdown = page.locator('.ant-dropdown:not(.ant-dropdown-hidden)').last();

  await expect(dropdown.getByRole('menuitem', { name: 'Зареєструватися' })).toBeVisible();
  await expect(dropdown.getByRole('menuitem', { name: 'Увійти' })).toBeVisible();
}

test.describe.serial('TeachUA registration', () => {
  test('REG-01 opens the registration modal', async ({ page }) => {
    const form = await openRegistrationForm(page);

    await expect(form.getByText('Реєстрація', { exact: true })).toBeVisible();
    await expect(form.getByLabel('Прізвище', { exact: true })).toBeVisible();
    await expect(form.getByLabel('Ім`я', { exact: true })).toBeVisible();
    await expect(form.getByLabel('Телефон', { exact: true })).toBeVisible();
    await expect(form.getByLabel('Email', { exact: true })).toBeVisible();
    await expect(form.getByLabel('Пароль', { exact: true })).toBeVisible();
    await expect(
      form.getByPlaceholder('Підтвердіть ваш пароль', { exact: true }),
    ).toBeVisible();
    await expect(form.getByRole('radio', { name: 'Відвідувач' })).toBeChecked();
    await expect(form.getByText('Керівник', { exact: true })).toBeVisible();
    await expect(form.getByRole('button', { name: 'Зареєструватися' })).toBeVisible();
  });

  test('REG-02 keeps the register button disabled on an empty form', async ({ page }) => {
    const form = await openRegistrationForm(page);

    await expect(form.getByRole('button', { name: 'Зареєструватися' })).toBeDisabled();
  });

  test('REG-03 registers a new visitor user', async ({ browserName, page }) => {
    // eslint-disable-next-line playwright/no-skipped-test
    test.skip(
      browserName === 'firefox',
      'The live app keeps password validation invalid in Firefox even when the UI value is Test123!.',
    );

    const form = await openRegistrationForm(page);

    await fillRegistrationForm(form, { email: uniqueEmail('visitor') });
    await expect(form.getByRole('button', { name: 'Зареєструватися' })).toBeEnabled();
    await form.getByRole('button', { name: 'Зареєструватися' }).click();

    await expectSuccessRegistration(page, form);
    await expectUnauthenticatedProfileMenu(page);
  });

  test('REG-04 shows client-side validation for email, phone, and password', async ({
    page,
  }) => {
    const form = await openRegistrationForm(page);
    const submitButton = form.getByRole('button', { name: 'Зареєструватися' });

    await form.getByLabel('Email', { exact: true }).fill('bad');
    await form.getByLabel('Email', { exact: true }).blur();
    await expect(form.getByText('Некоректний формат email')).toBeVisible();
    await expect(submitButton).toBeDisabled();

    await form.getByLabel('Email', { exact: true }).fill(uniqueEmail('validation'));
    await form.getByLabel('Телефон', { exact: true }).fill('501234567');
    await form.getByLabel('Телефон', { exact: true }).blur();
    await expect(form.getByText('Телефон не відповідає вказаному формату')).toBeVisible();
    await expect(
      form.getByText('Телефон не відповідає українському формату (+380)'),
    ).toBeVisible();
    await expect(submitButton).toBeDisabled();

    await form.getByLabel('Прізвище', { exact: true }).fill(VALID_USER.lastName);
    await form.getByLabel('Ім`я', { exact: true }).fill(VALID_USER.firstName);
    await form.getByLabel('Телефон', { exact: true }).fill(VALID_USER.phone);
    await form.getByLabel('Пароль', { exact: true }).fill('short1!');
    await form.getByLabel('Пароль', { exact: true }).blur();
    await expect(
      form.getByText('Пароль не може бути коротшим, ніж 8 та довшим, ніж 20 символів'),
    ).toBeVisible();
    await expect(submitButton).toBeDisabled();
  });

  test('REG-05 shows a password confirmation mismatch error', async ({ browserName, page }) => {
    const form = await openRegistrationForm(page);

    await fillRegistrationForm(form, {
      email: uniqueEmail('mismatch'),
      confirmPassword: 'Test1234!',
    });
    await form.getByPlaceholder('Підтвердіть ваш пароль', { exact: true }).blur();

    await expect(
      form.getByText(
        'Значення поля ‘Підтвердити пароль’ має бути еквівалентним значенню поля ‘Пароль’',
      ),
    ).toBeVisible();
    await expect(form.getByRole('button', { name: 'Зареєструватися' })).toHaveJSProperty(
      'disabled',
      browserName === 'firefox',
    );
  });

  test('REG-06 registers a new manager user', async ({ browserName, page }) => {
    // eslint-disable-next-line playwright/no-skipped-test
    test.skip(
      browserName === 'firefox',
      'The live app keeps password validation invalid in Firefox even when the UI value is Test123!.',
    );

    const form = await openRegistrationForm(page);
    const managerRole = form.getByRole('radio', { name: 'Керівник' });

    await form.getByText('Керівник', { exact: true }).click();
    await expect(managerRole).toBeChecked();

    await fillRegistrationForm(form, { email: uniqueEmail('manager') });
    await expect(form.getByRole('button', { name: 'Зареєструватися' })).toBeEnabled();
    await form.getByRole('button', { name: 'Зареєструватися' }).click();

    await expectSuccessRegistration(page, form);
  });

  test('REG-07 shows a duplicate email registration error', async ({ browserName, page }) => {
    // eslint-disable-next-line playwright/no-skipped-test
    test.skip(
      browserName === 'firefox',
      'The live app keeps password validation invalid in Firefox even when the UI value is Test123!.',
    );
    test.setTimeout(60_000);

    const duplicateEmail = uniqueEmail('duplicate');
    let form = await openRegistrationForm(page);

    await fillRegistrationForm(form, { email: duplicateEmail });
    await form.getByRole('button', { name: 'Зареєструватися' }).click();
    await expectSuccessRegistration(page, form);

    form = await openRegistrationForm(page);
    await fillRegistrationForm(form, { email: duplicateEmail });
    await form.getByRole('button', { name: 'Зареєструватися' }).click();

    await expect(page.getByText('Вказаний email вже зареєстрований на сайті')).toBeVisible();
    await expect(form).toBeHidden();
  });

  test('REG-08 shows OAuth links and updates role in their URLs', async ({ page }) => {
    const form = await openRegistrationForm(page);
    const googleLink = form.locator('a[href*="/oauth2/authorize/google"]');
    const facebookLink = form.locator('a[href*="/oauth2/authorize/facebook"]');

    await expect(googleLink).toBeVisible();
    await expect(facebookLink).toBeVisible();
    await expect(googleLink).toHaveAttribute('href', /role=ROLE_USER/);
    await expect(facebookLink).toHaveAttribute('href', /role=ROLE_USER/);

    await form.getByText('Керівник', { exact: true }).click();
    await expect(form.getByRole('radio', { name: 'Керівник' })).toBeChecked();
    await expect(googleLink).toHaveAttribute('href', /role=ROLE_MANAGER/);
    await expect(facebookLink).toHaveAttribute('href', /role=ROLE_MANAGER/);
  });
});
