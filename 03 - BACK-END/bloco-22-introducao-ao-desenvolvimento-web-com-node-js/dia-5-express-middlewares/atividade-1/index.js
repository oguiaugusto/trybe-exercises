const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const btcRoutes = require('./routes/btcRoutes')

const app = express();
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/btc', btcRoutes);

app.listen(3001, () => console.log('Running on port 3001'));
