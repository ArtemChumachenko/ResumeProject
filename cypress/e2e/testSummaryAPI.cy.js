describe('Summary API', () => {
  let summaryData
  let newSummaryData

  before(() => {
    newSummaryData ={
      total: 'Highly skilled and motivated Developer with 6+ years of experience.'
    }

    cy.request('http://localhost:3000/api/summary')
      .then(response => {
        expect(response.status).to.equal(200)
        expect(response.body).to.not.be.empty
        summaryData = response.body
      })
  })

  it('should return the summary data', () => {
    expect(summaryData).to.not.be.empty
    expect(summaryData).to.have.property('total', 'Highly skilled and motivated QA Engineer with 6+ years of experience in software testing and quality assurance. Possess a strong understanding of SDLC and various testing methodologies. Adept at creating and executing test plans and cases, identifying and reporting bugs, and working closely with cross-functional teams to deliver high-quality software.')
  })

  it('should update summary information with POST and verify changes on the site', () => {
    cy.request('POST', 'http://localhost:3000/api/summary', newSummaryData)
    .its('status').should('eq', 200)
    cy.reload()
    cy.visit('/')
    cy.get('#summary').should('be.visible')
    cy.contains('Highly skilled and motivated Developer with 6+ years of experience.')
    .should('be.visible')
  })
})

