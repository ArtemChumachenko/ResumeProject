const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Summary:', () => {
  it('should get the summary', (done) => {
    chai
      .request(server)
      .get('/api/summary')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('total');
        done();
      });
  });
});