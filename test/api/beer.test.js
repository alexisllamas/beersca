const server = require('../../api/index');
const PATH = '/api/v1/beers';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
describe('routes: articles', () => {
  describe(`GET ${PATH}`, () => {
    it('should return all the resources', done => {
      chai
        .request(server)
        .get(PATH)
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          res.body.should.to.be.an('array');
          res.body.length.should.to.not.eql(0);
          res.body.length.should.eql(25); //25 is the default size of the page
          res.body[0].should.include.keys('id', 'name', 'abv', 'image_url');
          done();
        });
    });
  });
  describe(`GET ${PATH}/search/:query`, () => {
    it('should return all the resources in the query', done => {
      chai
        .request(server)
        .get(`${PATH}/search/blonde`)
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          res.body.should.to.be.an('array');
          res.body.length.should.to.not.eql(0);
          res.body[0].should.include.keys('id', 'name', 'abv', 'image_url');
          done();
        });
    });
    it('should return empty array when not beers founded', done => {
      chai
        .request(server)
        .get(`${PATH}/search/alexisnotienecerveza`)
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          res.body.should.to.be.an('array');
          res.body.length.should.eql(0);
          done();
        });
    });
  });
});
