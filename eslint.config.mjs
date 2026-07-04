import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['node_modules/**', 'test-results/**', 'playwright-report/**', 'blob-report/**'],
  },
  ...tseslint.configs.recommended,
  {
    files: ['tests/**/*.ts'],
    ...playwright.configs['flat/recommended'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      // Hard requirement of this assignment: no manual waits, only auto-waiting expect/locators.
      'playwright/no-wait-for-timeout': 'error',
      'playwright/no-wait-for-selector': 'error',
      // Every spec file must wrap its tests in a top-level describe (test.describe('Coffee Cart')).
      'playwright/require-top-level-describe': 'error',
      // Prefer aria-label/data-test/role-based locators over raw CSS selectors.
      //'playwright/no-raw-locators': 'warn',
      'playwright/no-commented-out-tests': 'warn',
    },
  },
  // Must stay last: turns off ESLint stylistic rules that would conflict with Prettier formatting.
  eslintConfigPrettier,
);