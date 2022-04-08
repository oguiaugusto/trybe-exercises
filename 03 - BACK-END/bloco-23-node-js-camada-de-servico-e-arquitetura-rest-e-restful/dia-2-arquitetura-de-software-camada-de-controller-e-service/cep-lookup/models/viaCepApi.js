const axios = require('axios').default;

const getAddress = async (cep) => {
  const URL = `https://viacep.com.br/ws/${cep}/json/`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

module.exports = {
  getAddress,
};
