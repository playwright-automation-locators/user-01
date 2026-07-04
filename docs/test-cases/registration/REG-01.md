# REG-01 — Open registration modal

---

## Українська

| | |
|---|---|
| **ID** | REG-01 |
| **Назва** | Відкриття модалки реєстрації |
| **Пріоритет** | Smoke |
| **Теги** | `@smoke`, `navigation` |

### Мета
Перевірити, що неавторизований користувач може відкрити форму реєстрації через меню профілю в шапці.

### Передумови
- Користувач не залогінений
- Відкрита головна сторінка (`/` або `/dev/`)

### Кроки
1. Перейти на головну сторінку
2. Клікнути іконку профілю (dropdown `.user-profile`)
3. Обрати пункт меню **«Зареєструватися»**

### Очікуваний результат
- Видимий діалог з заголовком **«Реєстрація»**
- Видимі поля: Прізвище, Ім'я, Телефон, Email, Пароль, Підтвердження паролю
- Radio **«Відвідувач»** обраний за замовчуванням, доступний **«Керівник»**
- Кнопка **«Зареєструватися»** присутня

### Критерії приймання (автоматизація)
- [ ] `registrationDialog(page)` видимий
- [ ] `getByRole('heading', { name: 'Реєстрація' })` → count 1
- [ ] Усі 6 полів (`getByLabel`) резолвляться в 1 елемент у межах dialog

---

## English

| | |
|---|---|
| **ID** | REG-01 |
| **Title** | Open registration modal |
| **Priority** | Smoke |
| **Tags** | `@smoke`, `navigation` |

### Objective
Verify that an unauthenticated user can open the registration form via the header profile menu.

### Preconditions
- User is not logged in
- Home page is open (`/` or `/dev/`)

### Steps
1. Navigate to the home page
2. Click the profile icon (`.user-profile` dropdown)
3. Select menu item **«Зареєструватися»** (Register)

### Expected result
- Dialog with heading **«Реєстрація»** (Registration) is visible
- Fields visible: Last name, First name, Phone, Email, Password, Confirm password
- **«Відвідувач»** (Visitor) radio selected by default; **«Керівник»** (Manager) available
- **«Зареєструватися»** (Register) button is present

### Acceptance criteria (automation)
- [ ] `registrationDialog(page)` is visible
- [ ] `getByRole('heading', { name: 'Реєстрація' })` → count 1
- [ ] All 6 fields (`getByLabel`) resolve to exactly 1 element within the dialog
