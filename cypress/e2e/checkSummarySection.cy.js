describe('Summary Section', () => {
  it('should display the summary', async () => {
    cy.visit('/')

    cy.get('#summary').scrollIntoView()

    await cy.contains('Highly skilled and motivated QA Engineer with 6+ years of experience in software testing and quality assurance.').should('be.visible')
  })
})
