import service from "./service";

let { randomNumber } = service;

describe('Testa funções do arquivo service.js', () => {
  it('randomNumber é chamada e retorna o número 10', () => {
    randomNumber = jest.fn().mockReturnValue(10);

    randomNumber();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber()).toBe(10);
  });

  it('Testa se, ao trocar a implementação, randomNumber retorna a divisão esperada', () => {
    randomNumber = jest.fn().mockImplementation((n1, n2) => n1 / n2);

    randomNumber(6, 2);
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(6, 2)).toBe(3);
  });

  it('Testa se, ao trocar a implementação, randomNumber retorna a multiplicação esperada', () => {
    randomNumber = jest.fn().mockImplementation((n1, n2, n3) => n1 * n2 * n3);

    randomNumber(5, 5, 1);
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(5, 5, 1)).toBe(25);

    randomNumber.mockReset();
    randomNumber.mockImplementation(n => n * 2);

    randomNumber(5);
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(5)).toBe(10);
  });

  it('screamingString deve retornar a string em caixa baixa', () => {
    service.screamingString = jest
      .spyOn(service, 'screamingString')
      .mockImplementation(string => string.toLowerCase());

    expect(service.screamingString('Arroz')).toBe('arroz');
    expect(service.screamingString('ARROZ')).toBe('arroz');
    expect(service.screamingString('ArRoZ')).toBe('arroz');

    service.screamingString.mockRestore();
    expect(service.screamingString('bom dia')).toBe('BOM DIA');
  });

  it('firstLetter deve retornar a última letra da string', () => {
    service.firstLetter = jest
      .spyOn(service, 'firstLetter')
      .mockImplementation(string => string[string.length - 1]);

    expect(service.firstLetter('arroz')).toBe('z');

    service.firstLetter.mockRestore();
    expect(service.firstLetter('bom dia')).toBe('b');
  });

  it('concatStrings deve receber três strings e concatená-las', () => {
    service.concatStrings = jest
      .spyOn(service, 'concatStrings')
      .mockImplementation((string1, string2, string3) => string1 + string2 + string3);

    expect(service.concatStrings('a', 'b', 'c')).toBe('abc');

    service.concatStrings.mockRestore();
    expect(service.concatStrings('a', 'b')).toBe('ab');
  });
});
