const express = require('express');

const movieController = require('./controllers/movieController');

const app = express();
app.use(express.json());

app.post('/movies', movieController.create);

const PORT = 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));