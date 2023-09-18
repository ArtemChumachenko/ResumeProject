/* eslint-disable no-undef */
describe('Skills Section', () => {
  it('should display skills', async () => {
    cy.visit('/')

    await cy.get('#skills #skills-column1').should('be.visible')

    cy.contains('Cypress').should('be.visible')
  })
})
