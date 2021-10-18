const currenciesList = document.getElementById('currencies-list');
const addCurrecy = (item) => {
  const li = document.createElement('li');
  li.innerText = item;
  currenciesList.appendChild(li);
};

let topTenCurrencies = [];

const getCurrencies = (currencies) => {
  currencies.forEach((currency) => {
    const { name, symbol, priceUsd } = currency;
    const price = parseFloat(priceUsd).toFixed(2);
    const formatedCurrency = `${name} (${symbol}): ${price}`;
    addCurrecy(formatedCurrency);
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