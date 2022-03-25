const express = require('express');
const bodyParser = require('body-parser');

const errorMiddleware = require('./middlewares/error');
const Author = require('./controllers/Author');
const Books = require('./controllers/Books');

const PORT = 3001;

const app = express();
app.use(bodyParser.json());

app.get('/authors', Author.getAll);
app.get('/author/:id', Author.getById);
app.post('/authors', Author.create);

app.get('/books', Books.getAll);
app.get('/books/search', Books.getByAuthorId);
app.get('/books/:id', Books.getById);
app.post('/books', Books.create);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));