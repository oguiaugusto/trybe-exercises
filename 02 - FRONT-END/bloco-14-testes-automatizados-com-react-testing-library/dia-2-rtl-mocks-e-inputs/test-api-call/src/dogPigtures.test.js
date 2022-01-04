import fetchDog from './fetchDog';
jest.mock('./fetchDog');

describe('Simula requisição à API dogPigtures', () => {
  afterEach(() => fetchDog.mockReset());

  it('Requisição se resolve', async () => {
    fetchDog.mockResolvedValue('request success');

    fetchDog();
    expect(fetchDog).toHaveBeenCalledTimes(1);
    await expect(fetchDog()).resolves.toBe('request success');
  });

  it('Requisição falha', async () => {
    fetchDog.mockRejectedValue('request failed');

    fetchDog();
    expect(fetchDog).toHaveBeenCalledTimes(1);
    await expect(fetchDog()).rejects.toBe('request failed');
  });
});