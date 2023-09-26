/* eslint-disable n/handle-callback-err */
/* eslint-disable no-undef */
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const expect = chai.expect

chai.use(chaiHttp)

describe('Personal Info:', () => {
  it('should get personal information', (done) => {
    chai
      .request(server)
      .get('/api/personal-info')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.have.property('name')
        expect(res.body).to.have.property('title')
        done()
      })
  })
})
