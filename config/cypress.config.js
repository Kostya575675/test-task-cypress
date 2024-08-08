const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    browser: 'chrome',
    specPattern: 'cypress/tests/specs/*.spec.js',
  },
  chromeWebSecurity: false,
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'reports/mochawesome',
    charts: true,
    reportPageTitle: 'Bintime test task',
    embeddedScreenshots: true,
  },
  screenshotsFolder: 'reports/screenshots',
  videosFolder: 'reports/videos',
  projectId: 'hdgh12',
})
