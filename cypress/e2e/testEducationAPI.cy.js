/* eslint-disable no-undef */
describe('Education API', () => {
  it.skip('should return education data', () => {
    cy.request('http://localhost:3000/api/education')
      .its('status')
      .should('eq', 200)

    cy.request('http://localhost:3000/api/education')
      .its('body')
      .should('have.length.greaterThan', 0)
  })
})
