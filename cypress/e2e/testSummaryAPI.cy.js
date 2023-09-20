/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
describe('Summary API', () => {
  let summaryData

  before(() => {
    cy.request('http://localhost:3000/api/summary')
      .then(response => {
        expect(response.status).to.equal(200)
        expect(response.body.total).to.not.be.empty
        summaryData = response.body.total
      })
  })

  it('should return the summary data', () => {
    expect(summaryData).to.not.be.empty
  })
})
