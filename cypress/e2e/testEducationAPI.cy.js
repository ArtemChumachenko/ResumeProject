/* eslint-disable no-unused-expressions */
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

  it('should return education data', () => {
    expect(educationData).to.not.be.undefined
    expect(educationData).to.have.property('institution', 'Kazan State University')
    expect(educationData).to.have.property('degree', 'Bachelor of Science in Computer Science')
    expect(educationData).to.have.property('date', '1997 - 2002')
  })
})
