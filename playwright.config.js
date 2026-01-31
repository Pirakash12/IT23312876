const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",

  // ✅ Force Playwright to pick your spec files
  testMatch: ["**/*.spec.js"],

  reporter: "html",
  timeout: 60000,
  use: {
    headless: true,
    baseURL: "https://tamil.changathi.com/",
    navigationTimeout: 60000,
    trace: "on-first-retry",
  },

  retries: 1,

  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  ],
});
