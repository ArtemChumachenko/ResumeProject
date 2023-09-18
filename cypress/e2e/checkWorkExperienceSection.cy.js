/* eslint-disable no-undef */
describe('Work Experience Section', () => {
  it('should display work experience', async () => {
    cy.visit('/')

    cy.get('#work-experience')

    await cy.contains('AAN Consulting Corporation, NY').should('be.visible')
  })
})
