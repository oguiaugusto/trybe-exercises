const express = require('express');
const validateJWT = require('./middlewares/validateJWT');
const login = require('./controllers/login');
const users = require('./controllers/users');

const PORT = 3001;
const app = express();

app.use(express.json());

app.post('/login', login);
app.get('/users/me', validateJWT, users.getUser);
app.get('/top-secret', validateJWT, users.topSecret);

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
