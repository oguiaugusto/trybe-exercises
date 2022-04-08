const fs = require('fs');

const file = 'file.txt';

try {
  const data = fs.readFileSync(file, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Error reading file: ${err.path}`);
  console.log(err);
}
