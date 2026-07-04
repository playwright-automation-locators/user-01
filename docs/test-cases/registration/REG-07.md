# REG-07 — Duplicate email error

---

## Українська

| | |
|---|---|
| **ID** | REG-07 |
| **Назва** | Помилка при реєстрації з існуючим email |
| **Пріоритет** | Regression |
| **Теги** | `@regression`, `api-error` |

### Мета
Серверна помилка при повторному використанні email уже підтвердженого користувача.

### Передумови
- Уже існує користувач з email `existing@test.com` (наприклад, зареєстрований раніше вручну)

### Кроки
1. Відкрити форму реєстрації
2. Заповнити форму з email `existing@test.com`, решта полів — валідні
3. Натиснути «Зареєструватися»

### Очікуваний результат
- Error toast: «Користувача з email … вже зареєстровано» (або еквівалент)
- Модалка реєстрації **залишається відкритою**
- Користувач не залогінений

### Критерії приймання
- [ ] Error notification з серверним текстом
- [ ] `registrationDialog` все ще видимий

---

## English

| | |
|---|---|
| **ID** | REG-07 |
| **Title** | Duplicate email registration error |
| **Priority** | Regression |
| **Tags** | `@regression`, `api-error` |

### Objective
Server error when reusing an email of an already activated user.

### Preconditions
- A user with email `existing@test.com` already exists (e.g. registered earlier by hand)

### Steps
1. Open registration form
2. Fill form with `existing@test.com`, other fields valid
3. Click Register

### Expected result
- Error toast: user already registered with this email (Ukrainian server message)
- Registration modal **stays open**
- User is not logged in

### Acceptance criteria
- [ ] Error notification with server message
- [ ] `registrationDialog` still visible
