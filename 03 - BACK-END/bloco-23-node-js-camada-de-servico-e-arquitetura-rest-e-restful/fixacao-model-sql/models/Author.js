const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName, birthday, nationality }) => {
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');

  const author = {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
    birthday,
    nationality,
  };

  return Object.fromEntries(
    Object.entries(author).filter((a) => a[0] && a[1])
  );
}

const serialize = (authorData) => {
  const author = {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
    birthday: authorData.birthday,
    nationality: authorData.nationality,
  };

  return Object.fromEntries(
    Object.entries(author).filter((a) => a[0] && a[1])
  );
};

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors',
  );
  return authors.map(serialize).map(getNewAuthor);
};

const findById = async (id) => {
  const [author] = await connection.execute(
    'SELECT * FROM authors WHERE id = ?', [id]
  );

  if (author.length === 0) return null;
  return author.map(serialize).map(getNewAuthor)[0];
};

const isValid = (...names) => (
  !names.some((n) => !n || n.length === 0 || typeof n !== 'string')
);

const create = async (firstName, middleName, lastName, birthday, nationality) => connection.execute(
  'INSERT INTO authors(first_name, middle_name, last_name, birthday, nationality) VALUES (?, ?, ?, ?, ?)',
  [firstName, middleName, lastName, birthday, nationality],
);

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
