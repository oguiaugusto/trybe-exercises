const connection = require('./connection');

const getAddress = async (cep) => {
  const [address] = await connection.execute('SELECT * FROM ceps WHERE cep = ?', [cep]);

  if (address.length === 0) return null;
  return address;
};

module.exports = {
  getAddress,
};
