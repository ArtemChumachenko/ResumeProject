/* eslint-disable no-undef */
import './commands'
import addContext from 'mochawesome/addContext'
const multiReporters = require('cypress-multi-reporters')

const mochawesomeReporterOptions = {
  reportDir: 'cypress/reports',
  json: true,
  output: 'mochawesome.json',
  reportTitle: 'Cypress Tests'
}

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
    )(results)
  })
}

Cypress.on('test:after:run', (test, runnable) => {
  let videoName = Cypress.spec.name
  videoName = videoName.replace('/.js.*', '.js')
  const videoUrl = 'videos/' + videoName + '.mp4'

  addContext({ test }, videoUrl)
})
