/* eslint-disable no-undef */
describe('Zooming Effect', () => {
  it('should zoom the section when a navigation link is clicked', () => {
    cy.visit('/')

    cy.contains('Personal Info').click()
    cy.get('#personal-info').should('have.css', 'transform', 'matrix(1.2, 0, 0, 1.2, 0, 0)')

    cy.contains('Skills').click()
    cy.get('#skills').should('have.css', 'transform', 'matrix(1.2, 0, 0, 1.2, 0, 0)')

    cy.contains('Experience').click()
    cy.get('#work-experience').should('have.css', 'transform', 'matrix(1.2, 0, 0, 1.2, 0, 0)')

    cy.contains('Education').click()
    cy.get('#education').should('have.css', 'transform', 'matrix(1.2, 0, 0, 1.2, 0, 0)')
  })
})
