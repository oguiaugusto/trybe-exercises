const { uppercase, getPokemonDetails } = require('./exercicios')

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
});

describe('Testa se a função getPokemonDetails() funciona como esperado', () => {
  it('Testa se, ao passar um pokemon que não está contido no objeto de pokemons, ela lança um erro', (done) => {
    const expected = new Error('Não temos esse pokémon para você :(');
    const callback = (error, result) => {
      try {
        expect(error).toEqual(expected);
        done();
      } catch (error) {
        done(error);
      }
    };
    getPokemonDetails((pokemon) => pokemon.name === 'Pidgeot', callback);
  });
  it('Testa se, ao passar Charmander para a função, ela retorna a string correta', (done) => {
    const expected = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
    const callback = (error, result) => {
      try {
        expect(result).toEqual(expected);
        done();
      } catch (error) {
        done(error);
      }
    };
    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});