const cepModel = require('../models/cepModel');
const viaCepApi = require('../models/viaCepApi');

const errors = {
  invalidCep: { error: { code: 400, message: 'CEP inválido' } },
  notFoundCep: { error: { code: 404, message: `CEP não encontrado` } },
  alreadyExists: { error: { code: 409, message: `CEP já existente` }},
};

const isValidCep = (cep) => {
  const validCepRegex = /\d{5}-?\d{3}/;
  return validCepRegex.test(cep);
};

const normalizeCep = (cep) => cep.includes('-') ? cep : `${cep.slice(0, 5)}-${cep.slice(5)}`;

const getAddress = async (cep) => {
  if (!isValidCep(cep)) return errors.invalidCep;

  cep = normalizeCep(cep);
  let address = await cepModel.getAddress(cep);
  
  if (!address) {
    const apiAddress = await viaCepApi.getAddress(cep);
    if (!apiAddress || apiAddress.erro) return errors.notFoundCep;

    const { logradouro, bairro, localidade, uf } = apiAddress;
    address = await cepModel.create(cep, logradouro, bairro, localidade, uf);
  }
  return address;
};

const create = async (cep, logradouro, bairro, localidade, uf) => {
  if (!isValidCep(cep)) return errors.invalidCep;
  cep = normalizeCep(cep);

  const existingCep = await cepModel.getAddress(cep);
  if (existingCep) return errors.alreadyExists;

  const address = await cepModel.create(cep, logradouro, bairro, localidade, uf);
  return address;
};

module.exports = {
  getAddress,
  create,
};
