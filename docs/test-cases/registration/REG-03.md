# REG-03 — Successful registration

---

## Українська

| | |
|---|---|
| **ID** | REG-03 |
| **Назва** | Успішна реєстрація нового користувача |
| **Пріоритет** | Smoke |
| **Теги** | `@smoke`, `happy-path` |

### Мета
Позитивний сценарій реєстрації через модалку. **Без перевірки входу** — активація залежить від налаштування пошти.

### Передумови
- Унікальний email (`test+{timestamp}@example.com`)
- Бекенд доступний

### Тестові дані
| Поле | Значення |
|------|----------|
| Прізвище | Шевченко |
| Ім'я | Тарас |
| Телефон | 0501234567 |
| Email | unique |
| Пароль | Test123! |
| Підтвердження | Test123! |
| Роль | Відвідувач (default) |

### Кроки
1. Відкрити форму реєстрації
2. Заповнити всі поля валідними даними
3. Натиснути **«Зареєструватися»**
4. Дочекатися success toast
5. Переконатися, що модалка закрита

### Очікуваний результат
- Toast містить «зареєструвалися»
- **З поштою:** додатково текст про лист для підтвердження
- **Без пошти (local):** «Обліковий запис активовано — можете увійти»
- Модалка реєстрації не видима
- Користувач **не** залогінений (меню все ще «Зареєструватися» / «Увійти»)

### Не в scope
- Вхід одразу після реєстрації
- Перехід по verify-link з листа

### Критерії приймання
- [ ] Success notification видимий
- [ ] `registrationDialog` не видимий після сабміту
- [ ] Користувач не авторизований у шапці

### Примітка для автоматизації
```typescript
await expect(page.getByText(/зареєструвалися/i)).toBeVisible();
// MAIL_ENABLED=true  → очікувати «лист»
// MAIL_ENABLED=false → очікувати «активовано»
```

---

## English

| | |
|---|---|
| **ID** | REG-03 |
| **Title** | Successful new user registration |
| **Priority** | Smoke |
| **Tags** | `@smoke`, `happy-path` |

### Objective
Positive registration flow via the modal. **No login assertion** — activation depends on mail configuration.

### Preconditions
- Unique email (`test+{timestamp}@example.com`)
- Backend is available

### Test data
| Field | Value |
|-------|-------|
| Last name | Шевченко |
| First name | Тарас |
| Phone | 0501234567 |
| Email | unique |
| Password | Test123! |
| Confirm | Test123! |
| Role | Visitor (default) |

### Steps
1. Open registration form
2. Fill all fields with valid data
3. Click **«Зареєструватися»** (Register)
4. Wait for success toast
5. Assert registration modal is closed

### Expected result
- Toast contains «зареєструвалися» (registered successfully)
- **With mail:** message about verification email sent
- **Without mail (local):** account activated message
- Registration modal is not visible
- User is **not** logged in (menu still shows Register / Login)

### Out of scope
- Login immediately after registration
- Email verification link flow

### Acceptance criteria
- [ ] Success notification visible
- [ ] `registrationDialog` not visible after submit
- [ ] User not authenticated in header

### Automation note
```typescript
await expect(page.getByText(/зареєструвалися/i)).toBeVisible();
// MAIL_ENABLED=true  → expect «лист» / email text
// MAIL_ENABLED=false → expect «активовано» / activated text
```
