/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
describe('Personal Information API', () => {
  it.skip('should return personal information', () => {
    cy.request('http://localhost:3000/api/personal-info')
      .its('status')
      .should('eq', 200)
    cy.request('http://localhost:3000/api/personal-info')
      .its('body')
      .should('deep.include', {
        name: 'Artem Chumachenko',
        title: 'QA Automation Engineer',
        email: 'chenko.ar@gmail.com',
        phone: '704-750-18-53',
        address: '219 Murray Glen dr., Cary, NC'
      })
  })
})
