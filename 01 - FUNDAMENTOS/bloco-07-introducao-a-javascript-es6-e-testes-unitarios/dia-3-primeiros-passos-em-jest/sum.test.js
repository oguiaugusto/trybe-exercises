const sum = require('./sum');

describe('A função sum()', () => {
  it('sum(4, 5) é igual a 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it('sum(0, 0) é igual a 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it('sum(4, "5") lança um erro', () => {
    expect(() => {sum(4, '5')}).toThrow(Error);
  });
  it('a mensagem de erro "parameters must be numbers" é lançada ao realizar sum(4, "5")', () => {
    expect(() => {sum(4, '5')}).toThrow('parameters must be numbers');
  });
});
