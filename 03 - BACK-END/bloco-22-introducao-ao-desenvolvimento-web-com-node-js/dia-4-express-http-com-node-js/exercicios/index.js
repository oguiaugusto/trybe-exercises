const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(req);

  if (!authorization || authorization.length !== 16) {
    return res.status(401).json({ status: 401, message: 'Invalid token' });
  }

  return next();
};

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;

const app = express();
app.use(bodyParser.json());
app.use(auth);
app.use((err, req, res, next) => res.status(500).send(`Algo deu errado: ${err.message}`));

app.get('/ping', (_req, res) => res.json({ message: 'pong' }));
app.post('/hello', (req, res) => res.json({ message: `Hello, ${req.body.name}` }));
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (parseInt(age) > 17) return res.status(200).json({ message: `Hello, ${name}` });
  return res.status(401).json({ message: 'Unauthorized' });
});
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});
app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({ message: 'missing fields' });
  }
  return res.status(200).json({ token: generateToken() })
});

app.listen(3001, () => console.log('Running on port 3001'));
