const express = require('express');
const bodyParser = require('body-parser');
const readSimpsons = require('./readSimpsons');

const app = express();
app.use(bodyParser.json());

app.get('/simpsons', async (_req, res) => {
  const simpsons = await readSimpsons();
  res.status(200).json(simpsons);
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;

  const simpsons = await readSimpsons();
  const simpson = simpsons.find((s) => s.id === id);

  if (!simpson) return res.status(404).json({ status: 404, message: 'simpson not found' });
  return res.status(200).json(simpson);
});

app.listen(3001, () => console.log('Running on port 3001'));
