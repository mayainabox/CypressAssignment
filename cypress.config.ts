const { defineConfig } = require("cypress");
import { readPdf } from 'cypress/scripts/readPdf'

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      on('task', {
        readPdf
      })
    },
      testIsolation:false,
  },
});
