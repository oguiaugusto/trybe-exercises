const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

const app = require('../../index');
const { User } = require('../../models');

describe('Search all users', () => {
  describe('when no user is registered', () => {
    const findAllStub = stub(User, 'findAll');

    before(() => findAllStub.resolves([]));
    after(() => findAllStub.restore());

    it('called `User.findAll`', async () => {
      await chai.request(app).get('/user');
      expect(User.findAll.calledOnce).to.be.true;
    });

    it('status is `200 - OK`', async () => {
      const response = await chai.request(app).get('/user');
      expect(response.status).to.be.equals(200);
    });

    it('response is an array', async () => {
      const response = await chai.request(app).get('/user');
      expect(response.body).to.be.an('array');
    });

    it('the array is empty', async () => {
      const response = await chai.request(app).get('/user');
      expect(response.body).to.be.empty;
    });
  });
});
