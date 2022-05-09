require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || null;

app.get('/', (_req, res) => {
  const { SERVER_ENV } = process.env;
  if (!SERVER_ENV) {
    return res
      .status(500)
      .json({ message: 'I do not know in which environment i am running...' });
  }
  return res.status(200).json({ message: `Environment: ${SERVER_ENV}` });
});

if (!PORT) {
  process.exit();
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
