const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://blog.agibank.com.br',
    viewportWidth: 1440,
    viewportHeight: 900,
    chromeWebSecurity: false,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 60000,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    video: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
