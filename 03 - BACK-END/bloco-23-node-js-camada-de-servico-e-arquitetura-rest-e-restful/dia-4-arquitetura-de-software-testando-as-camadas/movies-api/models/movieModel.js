const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO movies(title, directed_by, release_year) VALUES(?, ?, ?)',
    [title, directedBy, releaseYear],
  );

  return {
    id: insertId,
    title,
    directedBy,
    releaseYear,
  };
};

module.exports = {
  create,
};
