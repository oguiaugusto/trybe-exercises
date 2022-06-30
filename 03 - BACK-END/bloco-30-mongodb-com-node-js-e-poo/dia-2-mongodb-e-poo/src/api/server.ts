import 'dotenv/config';
import App from './app';

const { PORT } = process.env;
new App().start(PORT);
