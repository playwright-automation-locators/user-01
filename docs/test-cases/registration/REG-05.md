# REG-05 — Password confirmation mismatch

---

## Українська

| | |
|---|---|
| **ID** | REG-05 |
| **Назва** | Помилка при неспівпадінні паролів |
| **Пріоритет** | Smoke |
| **Теги** | `@smoke`, `validation` |

### Мета
Перевірити валідацію поля «Підтвердження паролю».

### Передумови
- Відкрита модалка реєстрації

### Тестові дані
- Усі поля валідні
- Пароль: `Test123!`
- Підтвердження: `Test1234!`

### Кроки
1. Заповнити форму валідними даними
2. У полі підтвердження ввести інший пароль
3. Вийти з поля (blur)

### Очікуваний результат
- Повідомлення: **«Паролі не збігаються»**
- Кнопка «Зареєструватися» → disabled

### Критерії приймання
- [ ] Текст помилки видимий у dialog
- [ ] Submit disabled

---

## English

| | |
|---|---|
| **ID** | REG-05 |
| **Title** | Password confirmation mismatch |
| **Priority** | Smoke |
| **Tags** | `@smoke`, `validation` |

### Objective
Verify validation on the confirm password field.

### Preconditions
- Registration modal is open

### Test data
- All other fields valid
- Password: `Test123!`
- Confirm: `Test1234!`

### Steps
1. Fill the form with valid data
2. Enter a different value in confirm password
3. Blur the field

### Expected result
- Message: **«Паролі не збігаються»** (Passwords do not match)
- Register button → disabled

### Acceptance criteria
- [ ] Error text visible in dialog
- [ ] Submit disabled
