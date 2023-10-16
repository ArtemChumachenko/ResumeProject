describe('Resume Page', () => {
  it('loads the page and checks sections', () => {
    cy.visit('/')

    cy.get('#summary').should('exist')
    cy.get('#personal-info').should('exist')
    cy.get('#skills').should('exist')
    cy.get('#work-experience').should('exist')
    cy.get('#education').should('exist')
  })
})
