const connection = require('./connection');

const isValid = (firstName, lastName, email, password) => !(
  !firstName || !lastName || !email || !password || password.length < 6
);

const create = async (firstName, lastName, email, password) => {
  const [ { insertId } ] = await connection.execute(
    'INSERT INTO users(first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password],
  );

  return insertId;
};

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM users');

  return users;
};

module.exports = {
  isValid,
  create,
  getAll,
}
