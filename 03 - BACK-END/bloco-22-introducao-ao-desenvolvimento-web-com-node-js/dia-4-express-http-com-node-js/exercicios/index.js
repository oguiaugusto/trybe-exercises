const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

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

app.listen(3001, () => console.log('Running on port 3001'));
