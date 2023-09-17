const multiReporters = require('cypress-multi-reporters');

const mochawesomeReporterOptions = {
  reportDir: 'cypress/reports',
  json: true,
  output: 'mochawesome.json',
  reportTitle: 'Cypress Tests'
};

module.exports = (on, config) => {
  on('after:run', (results) => {
    return multiReporters(
      {
        reporters: [
          {
            reporter: 'mochawesome',
            options: mochawesomeReporterOptions
          },
          {
            reporter: 'junit',
            options: {
              mochaFile: 'cypress/reports/junit/test-results.xml'
            }
          }
        ]
      }
    )(results);
  });
};
