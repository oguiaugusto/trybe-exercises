const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'rest_exercicios',
});

module.exports = connection;
