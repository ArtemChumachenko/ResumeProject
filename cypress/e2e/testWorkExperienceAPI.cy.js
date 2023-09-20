/* eslint-disable no-undef */
describe('Work Experience API', () => {
  let workExperienceData

  before(() => {
    cy.request('http://localhost:3000/api/work-experience')
      .then(response => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.length.greaterThan(0)
        workExperienceData = response.body
      })
  })

  it.skip('should return work experience data', () => {
    expect(workExperienceData).to.have.length.greaterThan(0)
  })
})
