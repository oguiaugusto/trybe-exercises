const myName = "Guilherme"; //string literal
const birthCity = "São João de Meriti";
let birthYear = 2003; //number literal

var currentYear = new Date().getFullYear();
let myAge = currentYear - birthYear;

console.log(myName);
console.log(birthCity);
console.log(birthYear);
console.log(myAge);

let isValid = true; //boolean (true or false)
let indefinida; //undefined
let color = null; //espera redefinição

//+, -, *, /, **

let salary = 3000;

// console.log(salary + salary);
// console.log(salary - salary);
// console.log(salary * salary);
// console.log(salary / salary);
// console.log(3 ** 3);

salary++;
salary--;

console.log(salary)