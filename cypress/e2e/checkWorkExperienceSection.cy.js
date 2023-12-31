describe('Work Experience Section', () => {
  it('should display work experience', async () => {
    cy.visit('/')

    cy.get('#work-experience')

    await cy.contains('AAN Consulting Corporation, NY').should('be.visible')
    cy.contains('Date: March 2021 - Present').should('be.visible')
    cy.contains('Collaboration with cross-functional teams to develop and implement testing strategies').should('be.visible')
  })
})
