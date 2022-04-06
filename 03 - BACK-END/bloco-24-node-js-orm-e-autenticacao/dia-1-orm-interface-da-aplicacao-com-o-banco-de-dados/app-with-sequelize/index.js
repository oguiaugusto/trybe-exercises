const express = require('express');
const userController = require('./controllers/userController');

const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/user', userController);

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
