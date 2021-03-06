const express = require('express');
const book = require('./controllers/book');

const PORT = 3001;
const app = express();
app.use(express.json());

app.use('/books', book);

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

module.exports = app;
