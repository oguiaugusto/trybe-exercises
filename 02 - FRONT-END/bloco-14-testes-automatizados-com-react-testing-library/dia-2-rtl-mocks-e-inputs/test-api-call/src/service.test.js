import serviceFunctions from "./service";
jest.mock('./service');

const { randomNumber } = serviceFunctions;

describe('Testa funções do arquivo service.js', () => {
  it('randomNumber é chamada e retorna o número 10', () => {
    randomNumber.mockReturnValue(10);

    randomNumber();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber()).toBe(10);
  });
  it('Testa se, ao trocar a implementação, randomNumber retorna a divisão esperada', () => {
    randomNumber.mockImplementation((n1, n2) => n1 / n2);

    randomNumber(6, 2);
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(6, 2)).toBe(3);
  });
});
