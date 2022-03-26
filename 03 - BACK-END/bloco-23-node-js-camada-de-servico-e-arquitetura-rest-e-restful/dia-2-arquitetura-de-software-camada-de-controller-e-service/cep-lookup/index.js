require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
