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

const getByName = async (firstName, middleName, lastName) => {
  let query = 'SELECT * FROM authors ';
  query += middleName ? (
    'WHERE first_name = ? AND middle_name = ? AND last_name = ?'
  ) : (
    'WHERE first_name = ? AND last_name = ?'
  );

  const params = middleName ? [firstName, middleName, lastName] : [firstName, lastName];
  const [author] = await connection.execute(query, params);

  if (author.length === 0) return null;
  return author;
};

module.exports = {
  getAll,
  getById,
  create,
  getByName,
};
