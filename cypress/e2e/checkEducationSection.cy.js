describe('Education Section', () => {
  it('should display education details', async () => {
    cy.visit('/')

    cy.get('#education').scrollIntoView()

    await cy.get('#education').should('be.visible')
  })
})
