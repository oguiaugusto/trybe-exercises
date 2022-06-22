import { ICepAPI } from './interfaces';

class MockCepApi implements ICepAPI {
  async getAddressByCEP(_cep: string, _number: number) {
    return 'Rua tal';
  }

  async getCepByAddress(_address: string, _number: number) {
    return '12.345-67';
  }
}

export default MockCepApi;
