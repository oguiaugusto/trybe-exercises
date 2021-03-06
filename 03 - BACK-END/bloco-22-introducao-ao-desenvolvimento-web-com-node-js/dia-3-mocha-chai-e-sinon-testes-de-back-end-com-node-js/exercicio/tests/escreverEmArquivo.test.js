const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs').promises;

const escreverEmArquivo = require('../escreverEmArquivo');

describe('Testa função que escreve em arquivo', () => {
  describe('O retorno da função:', () => {
    before(() => sinon.stub(fs, 'writeFile').resolves('ok'));
    after(() => fs.writeFile.restore());

    it('é uma string', async () => {
      const result = await escreverEmArquivo('file1.txt', 'Hello!');
      expect(result).to.be.a('string');
    });
    it('tem o conteúdo "ok"', async () => {
      const result = await escreverEmArquivo('file2.txt', 'Goodbye!');
      expect(result).to.be.equals('ok');
    });
  });
});
