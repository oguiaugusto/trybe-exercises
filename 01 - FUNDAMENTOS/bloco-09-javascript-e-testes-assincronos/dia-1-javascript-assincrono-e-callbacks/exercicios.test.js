const { uppercase } = require('./exercicios')

describe('Testa se a função uppercase() funciona como esperado', () => {
  it(`Testa se é imprimida a palavra 'HELLO' ao passar para a função a palavra 'hello' `, (done) => {
    const word = 'hello';
    const expected = word.toUpperCase();
    uppercase(word, (result) => {
      try {
        expect(result).toEqual(expected);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
})