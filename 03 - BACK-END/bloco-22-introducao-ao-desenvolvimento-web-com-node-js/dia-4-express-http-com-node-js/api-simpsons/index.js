const express = require('express');
const bodyParser = require('body-parser');
const readSimpsons = require('./readSimpsons');

const app = express();
app.use(bodyParser.json());

app.listen(3001, () => console.log('Running on port 3001'));
