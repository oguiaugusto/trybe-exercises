const express = require('express');
const app = express();
const PORT = 3001;

const Author = require('./models/Author');
const Book = require('./models/Book');
const User = require('./models/User');

app.use(express.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();
  return res.status(200).json(authors);
});

app.get('/author/:id', async (req, res) => {
  const author = await Author.findById(req.params.id);

  if (!author) return res.status(404).json({ message: 'Author not found' });
  return res.status(200).json(author);
});

app.get('/books', async (req, res) => {
  const books = await Book.getAll();
  return res.status(200).json(books);
});

app.get('/books/search', async (req, res) => {
  const books = await Book.getByAuthorId(req.query.authorId);

  if (!books) return res.status(404).json({ message: 'Author not found' });
  return res.status(200).json(books);
});

app.get('/book/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) return res.status(404).json({ message: 'Book not found' });
  return res.status(200).json(book);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name = null, last_name, birthday = null, nationality = null } = req.body;

  if (!Author.isValid(first_name, last_name)) return res.status(400).json({ message: 'Invalid data' });
  await Author.create(first_name, middle_name, last_name, birthday, nationality);

  return res.status(200).json({ message: 'Author created successfully' });
});

app.post('/books', async (req, res) => {
  const { title, author_id = null } = req.body;

  if (!Book.isValid(title, author_id) || await !Author.findById(author_id)) {
    return res.status(400).json({ message: 'Invalid data' })
  };

  await Book.create(title, author_id);
  return res.status(200).json({ message: 'Book created successfully' });
});

// Exercícios
app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!User.isValid(firstName, lastName, email, password)) return res.status(400).json({ message: 'Invalid data' });
  const id = await User.create(firstName, lastName, email, password);

  return res.status(201).json({ id, firstName, lastName, email, password });
});

app.get('/user', async (req, res) => {
  const users = await User.getAll();
  return res.status(200).json(users);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
