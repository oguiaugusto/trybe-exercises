import CepService from './CepService';
import MockCepApi from './MockCepApi';

describe('Testa classe CepService', () => {
  const cepApi = new MockCepApi();
  const cepService = new CepService(cepApi);

  it('adddressByCep deve retornar o cep do endereço passado como parâmetro', async () => {
    const address = await cepService.addressByCep('any_cep', 1);
    expect(address).toBe('Rua tal');
  });
  it('cepByAddress deve retornar o endereço do cep passado como parâmetro', async () => {
    const cep = await cepService.cepByAddress('any_address', 1);
    expect(cep).toBe('12.345-67');
  });
});
