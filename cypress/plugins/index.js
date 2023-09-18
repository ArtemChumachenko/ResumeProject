/* eslint-disable no-undef */
const multiReporters = require('cypress-multi-reporters')
const fs = require('fs')
const { execSync } = require('child_process')
const dateTime = new Date().toISOString()
const gitBranch = getGitBranch()
const testResults = loadTestResults()
const totalTests = testResults.length
const successfulTests = testResults.filter(test => test.passed).length
const successRate = (successfulTests / totalTests) * 100

const customReport = {
  date: dateTime,
  gitBranch,
  successRate
}
const report = marge([customReport], {
  reportDir: 'cypress/report',
  reportFilename: 'custom-report'
})

const mochawesomeReporterOptions = {
  reportDir: 'cypress/reports',
  json: true,
  output: 'mochawesome.json',
  reportTitle: 'Cypress Tests'
}
fs.writeFileSync('/cypress/reports/custom-report.html', report)

function getGitBranch () {
  try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim()
    return branch
  } catch (error) {
    console.error('Error retrieving Git branch:', error.message)
    return null
  }
}

function loadTestResults (filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8')
    const testResults = JSON.parse(data)
    return testResults
  } catch (error) {
    console.error('Error loading test results:', error.message)
    return null
  }
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
