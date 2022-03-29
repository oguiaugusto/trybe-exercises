const { expect } = require('chai');
const sinon = require('sinon');

const movieModel = require('../../models/movieModel');
const movieService = require('../../services/movieService');

const movieExample = {
  title: 'Flying with the stars',
  directedBy: 'Jane Doe',
  releaseYear: 1999,
};

const expectedReturn = { id: 1, ...movieExample };

describe('teste movieService.js', () => {
  describe('a função create', () => {
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
      before(async () => sinon.stub(movieModel, 'create').resolves(expectedReturn));
      after(() => movieModel.create.restore());
  
      it('retorna um objeto', async () => {
        const res = await movieService.create(movieExample);
        expect(res).to.be.a('object');
      });
      it('o objeto contém as informações corretas do filme e uma chave `id`', async () => {
        const res = await movieService.create(movieExample);
  
        expect(res).to.have.a.property('id');
        expect(res).to.be.eql(expectedReturn);
      });
    });
  });

  describe('a função getById', () => {
    describe('quando o id é inválido', () => {
      it('retorna um objeto de erro que possui a mensagem `"id" must be a number!`', async () => {
        const res = await movieService.getById('not a valid id');
  
        expect(res).to.have.property('error');
        expect(res.error).to.have.property('message');
        expect(res.error.message).to.be.equal('"id" must be a number!');
      });
    });

    describe('quando o filme não é encontrado', () => {
      before(async () => {
        const errorObj = {
          code: 404,
          message: 'Movie not found!',
        };
        sinon.stub(movieModel, 'getById').resolves({ error: errorObj })
      });
      after(() => movieModel.getById.restore());

      it('retorna um objeto com a chave `error`', async () => {
        const res = await movieService.getById(12039);

        expect(res).to.have.property('error');
      });
      it('o objeto `error` possui uma chave `code` com o valor 404 - Not Found', async () => {
        const res = await movieService.getById(12039);

        expect(res.error).to.have.property('code');
        expect(res.error.code).to.be.equal(404);
      });
      it('o objeto `error` possui uma chave `message` com o valor `Movie not found!`', async () => {
        const res = await movieService.getById(12039);

        expect(res.error).to.have.property('message');
        expect(res.error.message).to.be.equal('Movie not found!');
      });
    });

    describe('quando o filme é encontrado', () => {
      before(async () => sinon.stub(movieModel, 'getById').resolves(expectedReturn));
      after(() => movieModel.getById.restore());

      it('retorna um objeto', async () => {
        const res = await movieService.getById(1);
        expect(res).to.be.a('object');
      });
      it('o objeto contém as informações do filme encontrado', async () => {
        const res = await movieService.getById(1);

        expect(res).to.be.eql(expectedReturn);
      });
    });
  });
});
