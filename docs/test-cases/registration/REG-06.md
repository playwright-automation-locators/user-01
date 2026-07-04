# REG-06 — Registration with Manager role

---

## Українська

| | |
|---|---|
| **ID** | REG-06 |
| **Назва** | Реєстрація з роллю «Керівник» |
| **Пріоритет** | Regression |
| **Теги** | `@regression`, `role` |

### Мета
Перевірити успішну реєстрацію з не-default роллю.

### Передумови
- Унікальний email

### Кроки
1. Відкрити форму реєстрації
2. Обрати radio **«Керівник»**
3. Заповнити всі поля валідними даними
4. Натиснути «Зареєструватися»

### Очікуваний результат
- Success toast
- Модалка закрита

### Критерії приймання
- [ ] Radio «Керівник» обраний перед сабмітом
- [ ] Реєстрація успішна (success toast + модалка закрита)

---

## English

| | |
|---|---|
| **ID** | REG-06 |
| **Title** | Registration with Manager role |
| **Priority** | Regression |
| **Tags** | `@regression`, `role` |

### Objective
Verify successful registration with a non-default role.

### Preconditions
- Unique email

### Steps
1. Open registration form
2. Select **«Керівник»** (Manager) radio
3. Fill all fields with valid data
4. Click Register

### Expected result
- Success toast
- Modal closed

### Acceptance criteria
- [ ] Manager radio checked before submit
- [ ] Registration succeeds (success toast + modal closed)
