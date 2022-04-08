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

const getById = async (id) => {
  const [book] = await connection.execute('SELECT * FROM books WHERE id = ?', [id]);

  if (book.length === 0) return null;
  return book;
};

const create = async (title, authorId) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO books(title, author_id) VALUES (?, ?)',
    [title, authorId],
  );

  return {
    id: insertId,
    title,
    authorId,
  };
};

const findByTitleAndAuthor = async (title, authorId) => {
  const query = 'SELECT * FROM books WHERE title = ? AND author_id = ?';
  const [book] = await connection.execute(query, [title, authorId]);

  if (book.length === 0) return null;
  return book;
};

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create,
  findByTitleAndAuthor,
};
