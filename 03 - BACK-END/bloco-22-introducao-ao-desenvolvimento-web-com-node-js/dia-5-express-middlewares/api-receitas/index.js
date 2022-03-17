const express = require('express');
const bodyParser = require('body-parser');
const recipesRouter = require('./recipesRouter');

const app = express();
app.use(bodyParser.json());

app.use('/recipes', recipesRouter);

app.all('*', (req, res) => {
    return res.status(404).json({ message: `Path '${req.path}' does not exist!`});
});

app.listen(3001, () => {
  console.log('Running on port 3001');
});

