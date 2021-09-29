const {
  decode,
  encode,
  techList,
  hydrate,
} = require('./playground-functions');

describe('Encode and Decode functions:', () => {
  it('Expect to be functions', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('Expect vowels [a, e, i, o, u] to be converted to [1, 2, 3, 4, 5]', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  it('Expect numbers [1, 2, 3, 4, 5] to be converted to [a, b, c, d, e]', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });
  it('Expect other letters and numbers not to be encoded or decoded', () => {
    expect(encode('aeiou bcd 12345 678')).toBe('12345 bcd 12345 678');
    expect(decode('aeiou bcd 12345 678')).toBe('aeiou bcd aeiou 678');
  });
  it('Expect returned length of string to be the same as given string', () => {
    const inputEString = 'Hello';
    const inputDString = 'H2ll4';
    const outputEString = encode(inputEString);
    const outputDString = decode(inputDString);
    expect(inputEString.length).toEqual(outputEString.length);
    expect(inputDString.length).toEqual(outputDString.length);
  });
});

// Código de teste retirado dos exercícios
describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

// Código de teste retirado dos exercícios
describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
