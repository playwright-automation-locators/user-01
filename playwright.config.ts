import { defineConfig, devices } from '@playwright/test';

declare const process: {
  arch: string;
  platform: string;
};

const supportsWebKit = !(process.platform === 'darwin' && process.arch === 'arm64');

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['json', { outputFile: 'test-results/results.json' }],
  ],
  use: {
    headless: true,
    trace: 'on',
    baseURL: 'http://speak-ukrainian.eastus2.cloudapp.azure.com/dev/',
    locale: 'uk-UA',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    ...(supportsWebKit
      ? [
          {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
          },
        ]
      : []),
  ],
});
