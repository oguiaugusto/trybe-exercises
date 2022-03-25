const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM books');
  return books;
};

const getByAuthorId = async (id) => {
  const [books] = await connection.execute('SELECT * FROM books WHERE author_id = ?', [id]);

  if (books.length === 0) return null;
  return books;
};

const findById = async (id) => {
  const [book] = await connection.execute('SELECT * FROM books WHERE id = ?', [id]);

  if (book.length === 0) return null;
  return book;
};

const isValid = (title, authorId) => !(
  !title || title.length < 3 || !authorId
);

const create = async (title, authorId) => connection.execute(
  'INSERT INTO books(title, author_id) VALUES (?, ?)',
  [title, authorId],
);

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  isValid,
  create,
};
