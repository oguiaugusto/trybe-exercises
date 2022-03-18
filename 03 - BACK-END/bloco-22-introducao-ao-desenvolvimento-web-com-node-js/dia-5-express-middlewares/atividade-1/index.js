const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const btcRoutes = require('./routes/btcRoutes');
const postsRoutes = require('./routes/postsRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/btc', btcRoutes);
app.use('/posts', postsRoutes);

app.listen(3001, () => console.log('Running on port 3001'));
