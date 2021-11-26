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
});
