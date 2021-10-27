const API_URL = 'https://icanhazdadjoke.com/';

const jokeContainer = document.getElementById('jokeContainer');
const setJoke = (joke) => {
  jokeContainer.innerText = joke;
};

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((joke) => setJoke(joke.joke));
};

window.onload = () => fetchJoke();