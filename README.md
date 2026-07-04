# Автоматизація тестування форми реєстрації / Registration form test automation (Playwright + TypeScript)

Навчальний проєкт для Playwright. Ваше завдання — **автоматизувати тестування форми реєстрації користувача** сайту TeachUA / Speak Ukrainian на основі готових тест-кейсів.

A learning project for your first steps in Playwright. Your task is to **automate testing of the user registration form** on the TeachUA / Speak Ukrainian site based on the provided test cases.

**Сайт для тестування / Site under test:** http://speak-ukrainian.eastus2.cloudapp.azure.com/dev/

---

## Українська

### Завдання

1. Прочитайте тест-кейси в папці [`docs/test-cases/registration`](./docs/test-cases/registration/README.md).
2. Для кожного тест-кейсу напишіть автотест на Playwright + TypeScript у папці `tests/`.
3. Перевіряйте лише те, що видно в інтерфейсі (UI): тексти, повідомлення, стан кнопок, видимість модалки.

### Тест-кейси

| ID | Що перевіряємо |
|----|----------------|
| [REG-01](./docs/test-cases/registration/REG-01.md) | Відкриття модалки реєстрації |
| [REG-02](./docs/test-cases/registration/REG-02.md) | Кнопка неактивна на порожній формі |
| [REG-03](./docs/test-cases/registration/REG-03.md) | Успішна реєстрація нового користувача |
| [REG-04](./docs/test-cases/registration/REG-04.md) | Клієнтська валідація (email, телефон, пароль) |
| [REG-05](./docs/test-cases/registration/REG-05.md) | Помилка при неспівпадінні паролів |
| [REG-06](./docs/test-cases/registration/REG-06.md) | Реєстрація з роллю «Керівник» |
| [REG-07](./docs/test-cases/registration/REG-07.md) | Помилка при реєстрації з існуючим email |
| [REG-08](./docs/test-cases/registration/REG-08.md) | Наявність OAuth-посилань |

### Як пришвидшити роботу: промпт для пошуку локаторів

Щоб не шукати локатори вручну в DOM, скористайтеся готовим промптом у файлі [`docs/Promts.md`](./docs/Promts.md). Він просить AI відкрити форму реєстрації на живому сайті, проаналізувати сторінку і повернути:

- покроковий шлях відкриття форми;
- helper `openRegistrationForm(page)`;
- таблицю локаторів для кожного поля (з альтернативами);
- приклад перевірки унікальності кожного локатора.

**Важливо: перевіряйте результат.** AI може помилятися. Перш ніж використовувати згенеровані локатори:

1. Перевірте кожен локатор — він має знаходити рівно один елемент: `await expect(locator).toHaveCount(1);`
2. Якщо локатор **валідний** (знаходить потрібний елемент і працює стабільно) — сміливо використовуйте його у тесті.
3. Якщо ні — виправте вручну, орієнтуючись на пріоритет локаторів нижче.

### Пріоритет локаторів (від найкращого)

1. `getByRole(role, { name })`
2. `getByLabel`
3. `getByPlaceholder`
4. `getByText` / `getByTitle` / `getByAltText`
5. `getByTestId` (якщо є)
6. CSS за стабільним класом — лише як крайній засіб

**Уникайте:** XPath, hash-класів (`ant-*`, `css-*`), `nth-child`, позиційних селекторів.

### Валідні тестові дані

| Поле | Значення |
|------|----------|
| Прізвище | `Шевченко` |
| Ім'я | `Тарас` |
| Телефон | `0501234567` |
| Email | `test+{timestamp}@example.com` (унікальний) |
| Пароль | `Test123!` |
| Підтвердження | `Test123!` |

---

## English

### Task

1. Read the test cases in [`docs/test-cases/registration`](./docs/test-cases/registration/README.md).
2. Write a Playwright + TypeScript test for each test case in the `tests/` folder.
3. Assert only what is visible in the UI: texts, messages, button states, modal visibility.

### Test cases

| ID | What we check |
|----|---------------|
| [REG-01](./docs/test-cases/registration/REG-01.md) | Open the registration modal |
| [REG-02](./docs/test-cases/registration/REG-02.md) | Button disabled on empty form |
| [REG-03](./docs/test-cases/registration/REG-03.md) | Successful new user registration |
| [REG-04](./docs/test-cases/registration/REG-04.md) | Client-side validation (email, phone, password) |
| [REG-05](./docs/test-cases/registration/REG-05.md) | Password mismatch error |
| [REG-06](./docs/test-cases/registration/REG-06.md) | Registration with Manager role |
| [REG-07](./docs/test-cases/registration/REG-07.md) | Duplicate email registration error |
| [REG-08](./docs/test-cases/registration/REG-08.md) | Presence of OAuth links |

### Speed up your work: the locator-search prompt

Instead of digging through the DOM manually, use the ready-made prompt in [`docs/Promts.md`](./docs/Promts.md). It asks the AI to open the registration form on the live site, analyze the page, and return:

- a step-by-step path to open the form;
- an `openRegistrationForm(page)` helper;
- a table of locators for each field (with alternatives);
- a uniqueness assertion example for each locator.

**Important: verify the result.** The AI can make mistakes. Before using the generated locators:

1. Verify each locator resolves to exactly one element: `await expect(locator).toHaveCount(1);`
2. If a locator is **valid** (finds the right element and is stable) — go ahead and use it in your test.
3. If not — fix it manually following the locator priority below.

### Locator priority (best first)

1. `getByRole(role, { name })`
2. `getByLabel`
3. `getByPlaceholder`
4. `getByText` / `getByTitle` / `getByAltText`
5. `getByTestId` (if present)
6. CSS by a stable class — last resort only

**Avoid:** XPath, hash classes (`ant-*`, `css-*`), `nth-child`, positional selectors.

### Valid test data

| Field | Value |
|-------|-------|
| Last name | `Шевченко` |
| First name | `Тарас` |
| Phone | `0501234567` |
| Email | `test+{timestamp}@example.com` (unique) |
| Password | `Test123!` |
| Confirm | `Test123!` |

---

## Приклад тесту / Example test

Створіть файл `tests/registration.spec.ts`. Нижче — helper `openRegistrationForm` та тест для REG-01 як стартова точка.

Create a file `tests/registration.spec.ts`. Below is the `openRegistrationForm` helper and a REG-01 test as a starting point.

```typescript
import { test, expect, Page } from '@playwright/test';

// Відкриває модалку реєстрації через меню профілю в шапці.
// Opens the registration modal via the profile menu in the header.
async function openRegistrationForm(page: Page): Promise<void> {
  await page.goto('/');
  await page.locator('.user-profile').click();
  await page.getByRole('menuitem', { name: 'Зареєструватися' }).click();
  await expect(page.getByRole('heading', { name: 'Реєстрація' })).toBeVisible();
}

test.describe('Реєстрація / Registration', () => {
  // REG-01 — Відкриття модалки реєстрації / Open registration modal
  test('REG-01: відкриває модалку реєстрації', async ({ page }) => {
    await openRegistrationForm(page);

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole('heading', { name: 'Реєстрація' })).toHaveCount(1);

    await expect(dialog.getByLabel('Прізвище')).toHaveCount(1);
    await expect(dialog.getByLabel("Ім'я")).toHaveCount(1);
    await expect(dialog.getByRole('button', { name: 'Зареєструватися' })).toBeVisible();
  });
});
```

> Локатори в цьому прикладі — орієнтовні. Перевірте їх на живому сайті (див. промпт у `docs/Promts.md`) і за потреби замініть.
>
> The locators here are approximate. Verify them on the live site (see the prompt in `docs/Promts.md`) and replace if needed.

---

## Корисні команди / Useful commands

```bash
npm test                      # запустити всі тести / run all tests
npm run test:headed           # у видимому браузері / in a visible browser
npx playwright test --debug   # покроковий дебаг (Playwright Inspector) / step-by-step debug
npx playwright test --ui      # інтерактивний UI-режим / interactive UI mode
npx playwright codegen URL    # записати дії та підглянути локатори / record actions & peek locators
npm run test:report           # відкрити HTML-звіт / open the HTML report
```

Дебаг одного тесту / Debug a single test:

```bash
npx playwright test tests/registration.spec.ts --debug
npx playwright test -g "REG-01" --debug   # за назвою / by title
```
