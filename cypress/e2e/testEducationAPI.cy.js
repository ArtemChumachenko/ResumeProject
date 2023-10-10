/* eslint-disable no-unused-expressions */

const { should } = require("chai")

/* eslint-disable no-undef */
describe('Education API', () => {
  let educationData
  let newEducationData

  before(() => {
    newEducationData = {
        institution: ' DUKE',
        degree: 'Bachelor of Science in Computer Science ',
        date: '2020 - 2022'
      }

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

  it('should update education information with POST and verify changes on the site', () => {
    cy.request('POST','http://localhost:3000/api/education', newEducationData)
    .its('status').should('eq' , 200)
    cy.reload()
    cy.visit('/')
    cy.get('#education'),should('be.visible')
    cy.contains('DUKE').should('be.visible')
    cy.contains('Date: 2020 - 2022').should('be.visible')
  })
})
