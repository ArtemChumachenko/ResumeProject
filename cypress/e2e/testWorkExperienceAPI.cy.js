/* eslint-disable no-undef */
describe('Work Experience API', () => {
  it.skip('should return work experience data', () => {
    cy.request('http://localhost:3000/api/work-experience')
      .its('status')
      .should('eq', 200)
    cy.request('http://localhost:3000/api/work-experience')
      .its('body')
      .should('have.length.greaterThan', 0)
  })
})
