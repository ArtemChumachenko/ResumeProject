/* eslint-disable no-undef */
before(() => {
  cy.request('http://localhost:3000/api/summary')
})
describe('Summary API', () => {
  it('should return the summary data', () => {
    cy.request('http://localhost:3000/api/summary')
      .its('status')
      .should('eq', 200)
    cy.request('http://localhost:3000/api/summary')
      .its('body.total')
      .should('not.be.empty')
  })
})
