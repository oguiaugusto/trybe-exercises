const Joi = require('joi');
const cepServices = require('../services/cepServices');

const getAddress = async (req, res, next) => {
  const address = await cepServices.getAddress(req.params.cep);

  if (address.error) return next(address.error);
  return res.status(200).json(address);
};

const create = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const { error } = Joi.object({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate({ cep, logradouro, bairro, localidade, uf });
  if (error) return next(error);

  const address = await cepServices.create(cep, logradouro, bairro, localidade, uf);
  if (address.error) return next(address.error);

  return res.status(201).json(address);
};

module.exports = {
  getAddress,
  create,
};
