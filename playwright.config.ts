import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/test',
  use: {
    baseURL: 'http://localhost:4321',
  },
  projects: [
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
  webServer: {
    command: 'npm run build && npx http-server dist --port 4321 --silent',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
  },
});
