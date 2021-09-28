const {
  sum,
  myRemove,
} = require('./script');

describe('Função sum()', () => {
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

describe('Função myRemove()', () => {
  it('myRemove([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
  });
  it('myRemove([1, 2, 3, 4], 3) NÃO retorna [1, 2, 3, 4]', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).not.toEqual(array);
  });
  it('myRemove([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 5)).toEqual(array);
  });
});
