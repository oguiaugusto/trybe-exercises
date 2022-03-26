const cepServices = require('../services/cepServices');

const getAddress = async (req, res, next) => {
  const address = await cepServices.getAddress(req.params.cep);

  if (address.error) return next(address.error);
  return res.status(200).json(address);
};

module.exports = {
  getAddress,
};
