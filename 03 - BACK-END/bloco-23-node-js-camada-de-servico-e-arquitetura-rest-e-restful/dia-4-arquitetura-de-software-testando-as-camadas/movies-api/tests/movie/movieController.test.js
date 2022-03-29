const { expect } = require('chai');
const sinon = require('sinon');

const movieService = require('../../services/movieService');
const movieController = require('../../controllers/movieController');

const movieExample = {
  title: 'Flying with the stars',
  directedBy: 'Jane Doe',
  releaseYear: 1999,
};
const expectedReturn = { id: 1, ...movieExample };

describe('teste movieController.js', () => {
  describe('a função create', () => {
    describe('quando recebe informação inválida', () => {
      const request = {};
      const response = {};
  
      before(async () => {
        request.body = {};
  
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
  
        sinon
          .stub(movieService, 'create')
          .resolves({ error: { code: 400, message: 'Invalid data' } });
      });
      after(() => movieService.create.restore());
  
      it('retorna o código de status `400` - Bad Request', async () => {
        await movieController.create(request, response);
        expect(response.status.calledWith(400)).to.be.true;
      });
      it('retorna a mensagem `Invalid data`', async () => {
        await movieController.create(request, response);
        expect(response.json.calledWith({ message: 'Invalid data' })).to.be.true;
      });
    });
  
    describe('quando inserido corretamente', () => {
      const request = {};
      const response = {};
  
      before(async () => {
        request.body = movieExample;
  
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
  
        sinon
          .stub(movieService, 'create')
          .resolves(expectedReturn);
      });
      after(() => movieService.create.restore());
  
      it('retona o código de status `201` - Created', async () => {
        await movieController.create(request, response);
        expect(response.status.calledWith(201)).to.be.true;
      });
      it('retona a mesagem `Movie created successfully!`', async () => {
        await movieController.create(request, response);
        expect(response.json.calledWith({ message: 'Movie created successfully!' })).to.be.true;
      });
    });
  });

  describe('a função getById', () => {
    describe('quando o id inválido', () => {
      const request = { params: { id: 'invalid' } };
      const response = {};

      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
      });

      it('retorna o código de status 400 - `Bad Request`', async () => {
        await movieController.getById(request, response);
        expect(response.status.calledWith(400)).to.be.true;
      });
      it('retorna a mensagem `"id" must be a number!`', async () => {
        await movieController.getById(request, response);
        expect(response.json.calledWith({ message: '"id" must be a number!' })).to.be.true;
      });
    });

    describe('quando o filme não é encontrado', () => {
      const request = { params: { id: 12039 } };
      const response = {};

      before(async () => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon
          .stub(movieService, 'getById')
          .resolves({ error: { code: 404, message: 'Movie not found!' } });
      });
      after(() => movieService.getById.restore());

      it('retorna o código de status 404 - `Not Found`', async () => {
        await movieController.getById(request, response);
        expect(response.status.calledWith(404)).to.be.true;
      });
      it('retorna a mensagem `Movie not found!`', async () => {
        await movieController.getById(request, response);
        expect(response.json.calledWith({ message: 'Movie not found!' })).to.be.true;
      });
    });

    describe('quando o filme é encontrado', () => {
      const request = { params: { id: 12039 } };
      const response = {};

      before(async () => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon
          .stub(movieService, 'getById')
          .resolves(expectedReturn);
      });
      after(() => movieService.getById.restore());

      it('retorna o código de status 200 - `OK`', async () => {
        await movieController.getById(request, response);
        expect(response.status.calledWith(200)).to.be.true;
      });
      it('retorna o objeto do filme encontrado', async () => {
        await movieController.getById(request, response);
        expect(response.json.calledWith(expectedReturn)).to.be.true;
      });
    });
  });
});
