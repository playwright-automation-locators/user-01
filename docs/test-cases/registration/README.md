# Registration E2E Test Cases / Тест-кейси реєстрації (E2E)

Мінімальний набір з **8 автоматизованих тест-кейсів** для модалки реєстрації TeachUA (Playwright).

Minimal set of **8 automated test cases** for the TeachUA registration modal (Playwright).

| ID | File | Smoke | Tags |
|----|------|:-----:|------|
| REG-01 | [REG-01.md](./REG-01.md) | ✅ | navigation |
| REG-02 | [REG-02.md](./REG-02.md) | ✅ | validation, UI state |
| REG-03 | [REG-03.md](./REG-03.md) | ✅ | happy path |
| REG-04 | [REG-04.md](./REG-04.md) | ❌ | validation |
| REG-05 | [REG-05.md](./REG-05.md) | ✅ | validation |
| REG-06 | [REG-06.md](./REG-06.md) | ❌ | role |
| REG-07 | [REG-07.md](./REG-07.md) | ❌ | API error |
| REG-08 | [REG-08.md](./REG-08.md) | ❌ | OAuth UI |

## How to open the form / Як відкрити форму

1. Homepage → user avatar (`.user-profile`) → **Зареєструватися** / **Register**
2. Not via login modal (no register link there).

## Valid test data / Валідні тестові дані

| Field / Поле | Value / Значення |
|--------------|------------------|
| Last name / Прізвище | `Шевченко` |
| First name / Ім'я | `Тарас` |
| Phone / Телефон | `0501234567` |
| Email | `test+{timestamp}@example.com` |
| Password / Пароль | `Test123!` |
| Confirm / Підтвердження | `Test123!` |

## Environment notes / Примітки щодо середовища

- **With mail / З поштою:** user is inactive until email verification; **do not** assert login right after REG-03.
- **Without mail (local) / Без пошти (local):** user is auto-activated; optional login test is REG-03b (out of minimal set).

## Optional / Опційно

- [REG-03b.md](./REG-03b.md) — Login after registration (activated user only).
