const { expect } = require('chai');
const sinon = require('sinon');

const movieService = require('../../services/movieService');
const movieController = require('../../controllers/movieController');

describe('o serviço movieController.js', () => {
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
      expect(response.status.calledWith(400)).to.be.equal(true);
    });
    it('retorna a mensagem `Invalid data`', async () => {
      await movieController.create(request, response);
      expect(response.json.calledWith({ message: 'Invalid data' })).to.be.equal(true);
    });
  });

  describe('quando inserido corretamente', () => {
    const movieExample = {
      title: 'Flying with the stars',
      directedBy: 'Jane Doe',
      releaseYear: 1999,
    };

    const request = {};
    const response = {};

    before(async () => {
      request.body = movieExample;

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon
        .stub(movieService, 'create')
        .resolves({ id: 1, ...movieExample });
    });
    after(() => movieService.create.restore());

    it('retona o código de status `201` - Created', async () => {
      await movieController.create(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
    });
    it('retona a mesagem `Movie created successfully!`', async () => {
      await movieController.create(request, response);
      expect(response.json.calledWith({ message: 'Movie created successfully!' })).to.be.equal(true);
    });
  });
});
