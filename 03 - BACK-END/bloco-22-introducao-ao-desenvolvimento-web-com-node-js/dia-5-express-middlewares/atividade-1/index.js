const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const btcRoutes = require('./routes/btcRoutes');
const postsRoutes = require('./routes/postsRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/btc', btcRoutes);
app.use('/posts', postsRoutes);

app.all('*', (_req, _res, next) => {
  const error = new Error;
  error.message = 'Opss, route not found!';
  error.status = 404;
  return next(error);
});

app.use(errorMiddleware);

app.listen(3001, () => console.log('Running on port 3001'));
