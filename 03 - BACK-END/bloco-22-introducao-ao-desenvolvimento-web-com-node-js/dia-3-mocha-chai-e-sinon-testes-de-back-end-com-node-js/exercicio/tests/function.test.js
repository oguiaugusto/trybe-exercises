const { expect } = require('chai');
const checarNumero = require('../checarNumero');

const POSTIVE = 'positivo';
const NEGATIVE = 'negativo';
const NEUTRAL = 'neutro';

describe('Testa função para saber se número é positivo, negativo ou neutro', () => {
  describe('Dos números menores que 0:', () => {
    it("-1 retorna 'negativo'", () => {
      const result = checarNumero(-1);
      expect(result).to.be.equal(NEGATIVE);
    });
    it("-50 retorna 'negativo'", () => {
      const result = checarNumero(-50);
      expect(result).to.be.equal(NEGATIVE);
    });
  });
  describe('Dos números maiores que 0:', () => {
    it("2 retorna 'positivo'", () => {
      const result = checarNumero(2);
      expect(result).to.be.equal(POSTIVE);
    });
    it("908 retorna 'positivo'", () => {
      const result = checarNumero(908);
      expect(result).to.be.equal(POSTIVE);
    });
  });
  describe('O número 0', () => {
    it('retorna neutro', () => {
      const result = checarNumero(0);
      expect(result).to.be.equal(NEUTRAL);
    });
  });
});
