describe('Navigation Menu', () => {
  it('should navigate to respective sections when buttons are clicked', () => {
    cy.visit('/')

    cy.contains('Personal Info').click()
    cy.get('#personal-info').should('exist')

    cy.contains('Skills').click()
    cy.get('#skills').should('exist')

    cy.contains('Experience').click()
    cy.get('#work-experience').should('exist')

    cy.contains('Education').click()
    cy.get('#education').should('exist')
  })
})
