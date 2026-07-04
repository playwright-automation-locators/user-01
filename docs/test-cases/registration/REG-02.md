# REG-02 — Submit button disabled on empty form

---

## Українська

| | |
|---|---|
| **ID** | REG-02 |
| **Назва** | Кнопка «Зареєструватися» неактивна на порожній формі |
| **Пріоритет** | Smoke |
| **Теги** | `@smoke`, `validation`, `ui-state` |

### Мета
Переконатися, що сабміт неможливий, поки форма порожня.

### Передумови
- Відкрита модалка реєстрації (`openRegistrationForm`)

### Кроки
1. Не заповнювати жодне поле
2. Перевірити стан кнопки «Зареєструватися»

### Очікуваний результат
- Кнопка **disabled**

### Критерії приймання
- [ ] `getByRole('button', { name: 'Зареєструватися' })` → `disabled`

---

## English

| | |
|---|---|
| **ID** | REG-02 |
| **Title** | Register button disabled on empty form |
| **Priority** | Smoke |
| **Tags** | `@smoke`, `validation`, `ui-state` |

### Objective
Ensure submit is blocked while the form is empty.

### Preconditions
- Registration modal is open (`openRegistrationForm`)

### Steps
1. Do not fill any field
2. Check the state of the **«Зареєструватися»** button

### Expected result
- Button is **disabled**

### Acceptance criteria
- [ ] `getByRole('button', { name: 'Зареєструватися' })` → `disabled`
