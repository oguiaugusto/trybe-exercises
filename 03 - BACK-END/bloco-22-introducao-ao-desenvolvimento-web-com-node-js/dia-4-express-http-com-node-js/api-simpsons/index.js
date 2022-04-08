const express = require('express');
const bodyParser = require('body-parser');
const { readSimpsons, writeSimpsons } = require('./fs-read-write');

const app = express();
app.use(bodyParser.json());

app.route('/simpsons')
  .get(async (_req, res) => {
    const simpsons = await readSimpsons();
    res.status(200).json(simpsons);
  })
  .post(async (req, res) => {
    const { id, name } = req.body;
    const simpsons = await readSimpsons();

    if (simpsons.some((s) => s.id === id)) {
      return res.status(409).json({ status: 409, message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await writeSimpsons(simpsons);
    res.status(204).end();
  });

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;

  const simpsons = await readSimpsons();
  const simpson = simpsons.find((s) => s.id === id);

  if (!simpson) return res.status(404).json({ status: 404, message: 'simpson not found' });
  return res.status(200).json(simpson);
});

app.listen(3001, () => console.log('Running on port 3001'));
