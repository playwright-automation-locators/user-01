# REG-04 — Client-side field validation

---

## Українська

| | |
|---|---|
| **ID** | REG-04 |
| **Назва** | Клієнтська валідація: email, телефон, пароль |
| **Пріоритет** | Regression |
| **Теги** | `@regression`, `validation` |

### Мета
Один тест з трьома негативними кроками. Після кожної помилки кнопка сабміту лишається disabled.

### Передумови
- Відкрита модалка реєстрації

### Кроки та очікування

**Крок 1 — Email**
- Ввести: `bad`
- Очікувати: «Некоректний формат email»
- Кнопка → disabled

**Крок 2 — Телефон**
- Заповнити валідний email
- Ввести телефон: `501234567`
- Очікувати: помилка формату (10 цифр / починається з 0)
- Кнопка → disabled

**Крок 3 — Пароль**
- Виправити телефон на `0501234567`
- Ввести пароль: `short1!`
- Очікувати: «від 8 до 20 символів»
- Кнопка → disabled

### Критерії приймання
- [ ] 3 різні повідомлення про помилки видимі
- [ ] Submit disabled після кожного кроку

---

## English

| | |
|---|---|
| **ID** | REG-04 |
| **Title** | Client-side validation: email, phone, password |
| **Priority** | Regression |
| **Tags** | `@regression`, `validation` |

### Objective
Single test with three negative steps. Submit button stays disabled after each error.

### Preconditions
- Registration modal is open

### Steps and expectations

**Step 1 — Email**
- Enter: `bad`
- Expect: «Некоректний формат email» (Invalid email format)
- Button → disabled

**Step 2 — Phone**
- Fill valid email
- Enter phone: `501234567`
- Expect: format error (10 digits / starts with 0)
- Button → disabled

**Step 3 — Password**
- Fix phone to `0501234567`
- Enter password: `short1!`
- Expect: length error (8–20 characters)
- Button → disabled

### Acceptance criteria
- [ ] Three distinct error messages visible
- [ ] Submit disabled after each step
