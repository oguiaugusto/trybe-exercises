const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs').promises;

const readFile = require('../io-files/readFile');

const FILE_CONTENT = 'The brown fox jumps over the lazy dog';

describe('Testa funcão que le arquivos', () => {
  describe('Caso o arquivo exista, ele', () => {
    before(() => sinon.stub(fs, 'readFile').resolves(FILE_CONTENT));
    after(() => fs.readFile.restore());

    it('responde uma string', async () => {
      const content = await readFile('file.txt');
      expect(content).to.be.a('string');
    });
    it('entrega o conteúdo esperado', async () => {
      const content = await readFile('file.txt');
      expect(content).to.be.equals(FILE_CONTENT);
    });
  });
  describe('Caso o arquivo não exista, ele', () => {
    before(() => sinon.stub(fs, 'readFile').rejects());
    after(() => fs.readFile.restore());

    it('responde null', async () => {
      const content = await readFile('non-existent-file.txt');
      expect(content).to.be.equal(null);
    });
  });
});
