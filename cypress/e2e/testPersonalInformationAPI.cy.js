describe('Personal Information API', () => {
  let personalInfoData
  let newPersonalInfo

  before(() => {
    newPersonalInfo = {
      name: 'John',
      title: 'Developer',
      email: 'my.email@example.com',
      phone: '123-456-7890',
      address: '123 New St, New City, NC'
    }

    cy.request('http://localhost:3000/api/personal-info')
      .then(response => {
        expect(response.status).to.equal(200)
        personalInfoData = response.body
      })
  })

  it('should return personal information', () => {
    expect(personalInfoData).to.not.be.undefined
    expect(personalInfoData).to.have.property('name', 'Artem Chumachenko')
    expect(personalInfoData).to.have.property('title', 'QA Automation Engineer')
    expect(personalInfoData).to.have.property('email', 'chenko.ar@gmail.com')
    expect(personalInfoData).to.have.property('phone', '704-750-18-53')
    expect(personalInfoData).to.have.property('address', '219 Murray Glen dr., Cary, NC')
  })

  it('should update personal information with POST and verify changes on the site', () => {
    cy.request('POST', 'http://localhost:3000/api/personal-info', newPersonalInfo)
      .its('status').should('eq', 200)
    cy.reload()
    cy.visit('/')
    cy.get('#personal-info').should('be.visible')
    cy.contains('Name: John').should('be.visible')
    cy.contains('Title: Developer').should('be.visible')
    cy.contains('Email: my.email@example.com').should('be.visible')
    cy.contains('Phone: 123-456-7890').should('be.visible')
    cy.contains('Address: 123 New St, New City, NC').should('be.visible')
  })
})
