const connection = require('./connection');

const getAll = async () => {
  const [authors] = await connection.execute('SELECT * FROM authors');
  return authors;
};

const getById = async (id) => {
  const [author] = await connection.execute('SELECT * FROM authors WHERE id = ?', [id]);
  
  if (author.length === 0) return null;
  return author;
};

const create = async (firstName, middleName, lastName, birthday, nationality) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO authors(first_name, middle_name, last_name, birthday, nationality) VALUES (?, ?, ?, ?, ?)',
    [firstName, middleName, lastName, birthday, nationality],
  );

  return {
    id: insertId,
    firstName,
    middleName,
    lastName,
    birthday,
    nationality,
  };
};

module.exports = {
  getAll,
  getById,
  create,
};
