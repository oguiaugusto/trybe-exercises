const readline = require('readline-sync');

const name = readline.question('What is your name? ');
const age = readline.questionInt('How old are you? ');

console.log(`Hello ${name}, you're ${age} years old`);