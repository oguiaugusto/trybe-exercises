const currenciesList = document.getElementById('currencies-list');
const addCurrecy = (item) => {
  const li = document.createElement('li');
  li.innerText = item;
  currenciesList.appendChild(li);
};

let topTenCurrencies = [];

const getCurrencies = async (currencies) => {
  const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json';
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const brlValue = data.brl;
      currencies.forEach((currency) => {
        const { name, symbol, priceUsd } = currency;
        const usdValue = parseFloat(priceUsd);
        const price = (usdValue * brlValue).toFixed(2);
        const formatedCurrency = `${name} (${symbol}): R$ ${price}`;
        addCurrecy(formatedCurrency);
      });
    });
};

const getData = async () => {
  const url = 'https://api.coincap.io/v2/assets';
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const allCurrencies = data.data;
      topTenCurrencies = allCurrencies.slice(0, 10);
      getCurrencies(topTenCurrencies);
    });
};

window.onload = () => getData();