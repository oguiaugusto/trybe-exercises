import 'dotenv/config';
import App from './app';

const PORT = process.env.PORT || 3001;
const app = new App();

app.express.listen(PORT, () => console.log(`Running on port: ${PORT}`));
