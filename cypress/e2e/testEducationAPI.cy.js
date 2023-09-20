/* eslint-disable no-undef */
describe('Education API', () => {
  let educationData

  before(() => {
    cy.request('http://localhost:3000/api/education')
      .then(response => {
        expect(response.status).to.equal(200)
        educationData = response.body
      })
  })

  it.skip('should return education data', () => {
    expect(educationData).to.have.length.greaterThan(0)
  })
})
