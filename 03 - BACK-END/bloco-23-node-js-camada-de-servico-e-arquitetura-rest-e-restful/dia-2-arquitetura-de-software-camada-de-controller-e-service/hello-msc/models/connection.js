const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'oguiaugusto',
  password: 'guilherme2003',
  database: 'model_example',
});

module.exports = connection;
