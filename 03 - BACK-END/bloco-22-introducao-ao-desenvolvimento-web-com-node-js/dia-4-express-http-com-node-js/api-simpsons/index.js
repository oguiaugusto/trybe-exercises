const express = require('express');
const bodyParser = require('body-parser');
const readSimpsons = require('./readSimpsons');

const app = express();
app.use(bodyParser.json());

app.get('/simpsons', async (req, res) => {
  const simpsons = await readSimpsons();
  res.status(200).json(simpsons);
});

app.listen(3001, () => console.log('Running on port 3001'));
