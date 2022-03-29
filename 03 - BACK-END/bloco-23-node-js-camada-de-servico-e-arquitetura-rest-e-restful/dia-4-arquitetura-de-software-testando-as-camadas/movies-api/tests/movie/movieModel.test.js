const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../models/connection');
const movieModel = require('../../models/movieModel');

describe('o modelo movieModel.js', () => {
  const movieExample = {
    title: 'Flying with the stars',
    directedBy: 'Jane Doe',
    releaseYear: 1999,
  };

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
