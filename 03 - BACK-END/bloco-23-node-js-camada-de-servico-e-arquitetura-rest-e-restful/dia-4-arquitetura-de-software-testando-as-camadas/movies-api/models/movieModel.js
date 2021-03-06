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

const getById = async (id) => {
  const [movie] = await connection.execute('SELECT * FROM movies WHERE id = ?', [id]);

  if (!movie || movie.length === 0) return null;
  return movie[0];
};

module.exports = {
  create,
  getById,
};
