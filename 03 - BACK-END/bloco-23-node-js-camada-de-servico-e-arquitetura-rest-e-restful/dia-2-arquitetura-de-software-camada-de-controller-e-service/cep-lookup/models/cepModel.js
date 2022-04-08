const connection = require('./connection');

const getAddress = async (cep) => {
  const [address] = await connection.execute('SELECT * FROM ceps WHERE cep = ?', [cep]);

  if (address.length === 0) return null;
  return address;
};

const create = async (cep, logradouro, bairro, localidade, uf) => {
  await connection.execute(
    'INSERT INTO ceps(cep, logradouro, bairro, localidade, uf) VALUES(?, ?, ?, ?, ?)',
    [cep, logradouro, bairro, localidade, uf],
  );

  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

module.exports = {
  getAddress,
  create,
};
