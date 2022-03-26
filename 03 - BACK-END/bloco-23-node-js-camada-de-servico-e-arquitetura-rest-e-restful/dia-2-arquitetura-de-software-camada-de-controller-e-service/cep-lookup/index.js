require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;

const errorMiddleware = require('./middlewares/errorMiddleware');
const cep = require('./controllers/cepControllers');

const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));
app.get('/cep/:cep', cep.getAddress);
app.post('/cep', cep.create);

app.use(errorMiddleware);
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
