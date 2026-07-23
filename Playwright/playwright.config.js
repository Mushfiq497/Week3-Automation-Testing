import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  reporter: 'html',

  use: {

    headless: false,
  launchOptions: {
    slowMo: 1000
  },
  screenshot: 'only-on-failure',
  video: 'retain-on-failure'

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

  ],

});