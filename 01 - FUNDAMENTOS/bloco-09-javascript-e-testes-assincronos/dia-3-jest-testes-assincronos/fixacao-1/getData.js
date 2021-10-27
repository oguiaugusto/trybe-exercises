// getData.js
const fetch = require('node-fetch');

const getSuperHero = async () => {
  const response = await fetch('https://www.superheroapi.com/api.php/4192484924171229/720');
  const hero = await response.json();
  return hero.name;
};

const getSuperHeroError = async () => {
  try {
    const response = await fetch('https://www.superherowapi.com/api.php/4192484924171229/720');
    const hero = await response.json();
    return hero.name;
  } catch (error) {
    return 'erro';
  }
};

getSuperHero(); // Wonder Woman
getSuperHeroError();

module.exports = { getSuperHero, getSuperHeroError };