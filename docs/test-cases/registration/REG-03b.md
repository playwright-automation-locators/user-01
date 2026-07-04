# REG-03b — Login after registration (optional)

> **Не входить у мінімальний набір з 8 TC.**  
> **Not part of the minimal set of 8 TCs.**

---

## Українська

| | |
|---|---|
| **ID** | REG-03b |
| **Назва** | Вхід після реєстрації (лише активований користувач) |
| **Пріоритет** | Optional |
| **Теги** | `@optional`, `login` |

### Мета
Перевірити вхід одразу після реєстрації, коли обліковий запис **вже активний**.

### Коли запускати
| Середовище | Умова |
|------------|--------|
| Local без SMTP | Після REG-03 — користувач auto-activated |
| CI з mail | `beforeAll`: активація через API/admin, потім login |

### Кроки
1. Виконати успішну реєстрацію (REG-03)
2. Переконатися, що користувач активний
3. Відкрити модалку входу (аватар → «Увійти»)
4. Увійти тим самим email/паролем

### Очікуваний результат
- Success toast «залогувалися»
- Меню профілю змінилось (користувач авторизований)

### Критерії приймання
- [ ] Header shows authenticated state

---

## English

| | |
|---|---|
| **ID** | REG-03b |
| **Title** | Login after registration (activated user only) |
| **Priority** | Optional |
| **Tags** | `@optional`, `login` |

### Objective
Verify login immediately after registration when the account is **already active**.

### When to run
| Environment | Condition |
|-------------|-----------|
| Local without SMTP | After REG-03 — user auto-activated |
| CI with mail | `beforeAll`: activate via API/admin, then login |

### Steps
1. Complete successful registration (REG-03)
2. Ensure user is active
3. Open login modal (avatar → Login)
4. Sign in with same email/password

### Expected result
- Success toast for login
- Header reflects authenticated state

### Acceptance criteria
- [ ] Header shows authenticated state
