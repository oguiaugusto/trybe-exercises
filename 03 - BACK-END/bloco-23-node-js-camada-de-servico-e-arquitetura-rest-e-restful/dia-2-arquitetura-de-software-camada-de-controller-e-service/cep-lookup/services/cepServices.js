const cepModel = require('../models/cepModel');

const getAddress = async (cep) => {
  const validCpfRegex = /\d{5}-?\d{3}/;
  if (!validCpfRegex.test(cep)) return { error: { code: 400, message: 'CEP inválido' } };

  cep = cep.includes('-') ? cep : `${cep.slice(0, 5)}-${cep.slice(5)}`;
  const address = await cepModel.getAddress(cep);
  
  if (!address) return { error: { code: 404, message: `CEP ${cep} não encontrado` } };
  return address;
};

module.exports = {
  getAddress,
};
