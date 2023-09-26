/* eslint-disable n/handle-callback-err */
/* eslint-disable no-undef */
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const expect = chai.expect

chai.use(chaiHttp)

describe('Work Experience:', () => {
  it('should get work experience', (done) => {
    chai
      .request(server)
      .get('/api/work-experience')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('array')
        done()
      })
  })
})
