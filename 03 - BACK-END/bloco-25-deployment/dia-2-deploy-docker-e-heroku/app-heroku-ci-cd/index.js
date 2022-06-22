const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || null;

if (!PORT) process.exit();

app.get('/', (_req, res) => {
  res.send(
    `
    <h2>API online on port: ${PORT}!</h2>
    <div>
      <p>Use <i>https://herokudockerfile.herokuapp.com/hello?name=YOUR_NAME</i> to say hi!</p>
    </div>
    `,
  );
});

app.get('/hello', (req, res) => {
  const { name } = req.query;

  if (!name || name.length === 0) {
    return res.send("<h1>I don't know you...</h1>");
  }

  return res.send(`<h1>Hello, ${name}</h1>`);
});

app.listen(PORT);
