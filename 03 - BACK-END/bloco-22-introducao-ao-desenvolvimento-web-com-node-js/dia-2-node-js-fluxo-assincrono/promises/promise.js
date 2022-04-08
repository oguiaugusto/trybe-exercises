const fs = require('fs');

const readFilePromise = (fileName) => new Promise((res, rej) => {
  fs.readFile(fileName, (err, content) => err ? rej(err) : res(content))
});

readFilePromise('file1.txt')
  .then((r) => {
    console.log('file1.txt:\n', r.toString('utf-8'), '\n');
    return readFilePromise('file2.txt');
  })
  .then((r) => {
    console.log('file2.txt:\n', r.toString('utf-8'), '\n');
    return readFilePromise('file3.txt');
  })
  .then((r) => console.log('file3.txt:\n', r.toString('utf-8'), '\n'))
  .catch((err) => console.log(err.message));
