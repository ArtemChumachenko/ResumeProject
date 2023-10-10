/* eslint-disable n/handle-callback-err */
/* eslint-disable no-undef */
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const expect = chai.expect

chai.use(chaiHttp)

describe('Education:', () => {
  it('should get education information', (done) => {
    chai
      .request(server)
      .get('/api/education')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.have.property('institution')
        expect(res.body).to.have.property('degree')
        expect(res.body).to.have.property('date')
        done()
      })
  })
})
