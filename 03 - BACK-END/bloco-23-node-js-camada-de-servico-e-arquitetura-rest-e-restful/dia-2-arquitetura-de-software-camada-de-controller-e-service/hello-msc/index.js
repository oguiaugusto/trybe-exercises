const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./controllers/Author');

const PORT = 3001;

const app = express();
app.use(bodyParser.json());

app.get('/authors', Author.getAll);
app.get('/author/:id', Author.getById);
app.post('/authors', Author.create);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));