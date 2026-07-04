# REG-08 — OAuth registration links

---

## Українська

| | |
|---|---|
| **ID** | REG-08 |
| **Назва** | Наявність OAuth-посилань з role у URL |
| **Пріоритет** | Regression |
| **Теги** | `@regression`, `oauth` |

### Мета
Перевірити UI соцкнопок у формі реєстрації **без** проходження OAuth flow.

### Передумови
- Відкрита модалка реєстрації

### Кроки
1. Знайти посилання «Реєстрація через Google» та «Реєстрація через Facebook»
2. Перевірити атрибут `href`
3. Обрати роль «Керівник» і знову перевірити `href`

### Очікуваний результат
- Обидва links видимі
- `href` містить `role=` (`ROLE_USER` за замовчуванням)
- Після вибору «Керівник» — `href` містить `ROLE_MANAGER`

### Критерії приймання
- [ ] `getByRole('link', { name: 'Реєстрація через Google' })` → count 1
- [ ] `getByRole('link', { name: 'Реєстрація через Facebook' })` → count 1
- [ ] `href` оновлюється при зміні ролі

### Не в scope
- Редирект на Google/Facebook і повернення в застосунок

---

## English

| | |
|---|---|
| **ID** | REG-08 |
| **Title** | OAuth registration links with role in URL |
| **Priority** | Regression |
| **Tags** | `@regression`, `oauth` |

### Objective
Verify social sign-up buttons in the registration form **without** completing OAuth flow.

### Preconditions
- Registration modal is open

### Steps
1. Locate links «Реєстрація через Google» and «Реєстрація через Facebook»
2. Assert `href` attribute
3. Select Manager role and re-check `href`

### Expected result
- Both links visible
- `href` contains `role=` (`ROLE_USER` by default)
- After selecting Manager — `href` contains `ROLE_MANAGER`

### Acceptance criteria
- [ ] `getByRole('link', { name: 'Реєстрація через Google' })` → count 1
- [ ] `getByRole('link', { name: 'Реєстрація через Facebook' })` → count 1
- [ ] `href` updates when role changes

### Out of scope
- OAuth redirect and callback flow
