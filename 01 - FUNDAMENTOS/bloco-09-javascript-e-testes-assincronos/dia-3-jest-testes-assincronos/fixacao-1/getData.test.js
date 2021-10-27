const { getSuperHero, getSuperHeroError } = require('./getData');

describe('Testa funções do arquivo getData', () => {
  it('Verifica se o nome do herói é Wonder Woman', async () => {
    const hero = await getSuperHero();
    expect(hero).toBe('Wonder Woman');
  });
  it('Verifica se a função de erro retorna a palavra erro', async () => {
    const error = await getSuperHeroError();
    expect(error).toBe('erro');
  });
})