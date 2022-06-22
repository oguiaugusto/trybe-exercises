import 'dotenv/config';
import { Options } from 'sequelize';

const { DB_HOSTNAME, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'books_api',
  host: process.env.DB_HOSTNAME || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
};

export = config;
