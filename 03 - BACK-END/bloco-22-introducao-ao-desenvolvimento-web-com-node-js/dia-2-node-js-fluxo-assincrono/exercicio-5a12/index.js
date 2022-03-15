const promise = (n) => new Promise((resolve, reject) => {
  if ((n % 3) === 0 && (n % 5) === 0) resolve('FizzBuzz');
  if ((n % 3) === 0) resolve('Fizz');
  if ((n % 5) === 0) resolve('Buzz');
  reject(n);
});

promise(2).catch(console.error);
promise(9).then(r => console.log(r));
promise(10).then(r => console.log(r));
promise(15).then(r => console.log(r));
