const axios = require('axios').default;

const API_URL = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
const getBtcApi = async () => {
  try {
    const response = await axios(API_URL);
    return response.data;
  } catch (err) {
    return null;
  }
};

module.exports = getBtcApi;
