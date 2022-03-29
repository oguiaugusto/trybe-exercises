const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../models/connection');
const movieModel = require('../../models/movieModel');

const movieExample = {
  title: 'Flying with the stars',
  directedBy: 'Jane Doe',
  releaseYear: 1999,
};

describe('teste movieModel.js', () => {
  describe('a função create', () => {
    before(async () => {
      const execute = [{ insertId: 1 }];
      sinon.stub(connection, 'execute').resolves(execute);
    });
    after(() => connection.execute.restore());
  
    describe('quando é inserido com sucesso: ', () => {
      it('retorna um objeto', async () => {
        const res = await movieModel.create(movieExample);
        expect(res).to.be.a('object');
      });
      it('o objeto contém as informações corretas do filme e uma chave `id`', async () => {
        const res = await movieModel.create(movieExample);
        const expectedReturn = { id: 1, ...movieExample };
  
        expect(res).to.have.a.property('id');
        expect(res).to.be.eql(expectedReturn);
      });
    });
  });

  describe('a função getById', () => {
    describe('quando não encontra um filme com o id requisitado', () => {
      before(async () => {
        const execute = [null];
        sinon.stub(connection, 'execute').resolves(execute);
      });
      after(() => connection.execute.restore());

      it('retorna null', async () => {
        const res = await movieModel.getById(12039);
        expect(res).to.be.null;
      });
    });
    describe('quando encontra um filme com o id requisitado', () => {
      before(async () => {
        const execute = [{ id: 1, ...movieExample }];
        sinon.stub(connection, 'execute').resolves(execute);
      });
      after(() => connection.execute.restore());

      it('retorna o objeto do filme enviado ao banco de dados', async () => {
        const res = await movieModel.getById(1);
        const expectedReturn = { id: 1, ...movieExample };

        expect(res).to.be.eql(expectedReturn);
      })
    });
  });
});
