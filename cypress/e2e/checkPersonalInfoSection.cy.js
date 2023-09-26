/* eslint-disable no-undef */
describe('Personal Information', () => {
  it('should display personal information', async () => {
    cy.visit('/')

    cy.get('#personal-info').should('be.visible')

    await cy.contains('Name: Artem Chumachenko').should('be.visible')
    cy.contains('Title: QA Automation Engineer').should('be.visible')
    cy.contains('Email: chenko.ar@gmail.com').should('be.visible')
    cy.contains('Phone: 704-750-18-53').should('be.visible')
    cy.contains('Address: 219 Murray Glen dr., Cary, NC').should('be.visible')
  })
})
