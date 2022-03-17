const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.json({ message: 'pong' }));
app.post('/hello', (req, res) => res.json({ message: `Hello, ${req.body.name}` }));

app.listen(3001, () => console.log('Running on port 3001'));
