const { expect } = require('chai');
const sinon = require('sinon');

const movieModel = require('../../models/movieModel');
const movieService = require('../../services/movieService');

describe('o serviço movieService.js', () => {
  describe('quando recebe informação inválida ', () => {
    const emptyObj = {};
    const invalidValues = {
      title: '',
      directedBy: undefined,
      releaseYear: null,
    };

    it('retorna um objeto', async () => {
      const res1 = await movieService.create(emptyObj);
      const res2 = await movieService.create(invalidValues);
      
      expect(res1).to.be.a('object');
      expect(res2).to.be.a('object');
    });
    it('o objeto contém a chave `error`, que contém as chaves `code` e `message`', async () => {
      const res = await movieService.create(invalidValues);

      expect(res).to.have.property('error');
      expect(res.error).to.have.property('code');
      expect(res.error).to.have.property('message');
    });
  });

  describe('quando inserido corretamente', () => {
    const movieExample = {
      title: 'Flying with the stars',
      directedBy: 'Jane Doe',
      releaseYear: 1999,
    };

    before(async () => {
      const returnObj = { id: 1, ...movieExample };
      sinon.stub(movieModel, 'create').resolves(returnObj);
    });
    after(() => movieModel.create.restore());

    it('retorna um objeto', async () => {
      const res = await movieService.create(movieExample);
      expect(res).to.be.a('object');
    });
    it('o objeto contém as informações corretas do filme e uma chave `id`', async () => {
      const res = await movieService.create(movieExample);
      const expectedReturn = { id: 1, ...movieExample };

      expect(res).to.have.a.property('id');
      expect(res).to.be.eql(expectedReturn);
    });
  });
});
