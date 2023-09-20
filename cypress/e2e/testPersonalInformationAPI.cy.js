/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
describe('Personal Information API', () => {
  let personalInfoData

  before(() => {
    cy.request('http://localhost:3000/api/personal-info')
      .then(response => {
        expect(response.status).to.equal(200)
        personalInfoData = response.body
      })
  })

  it.skip('should return personal information', () => {
    expect(personalInfoData).to.not.be.undefined
    expect(personalInfoData).to.have.property('name', 'Artem Chumachenko')
    expect(personalInfoData).to.have.property('title', 'QA Automation Engineer')
    expect(personalInfoData).to.have.property('email', 'chenko.ar@gmail.com')
    expect(personalInfoData).to.have.property('phone', '704-750-18-53')
    expect(personalInfoData).to.have.property('address', '219 Murray Glen dr., Cary, NC')
  })
})
