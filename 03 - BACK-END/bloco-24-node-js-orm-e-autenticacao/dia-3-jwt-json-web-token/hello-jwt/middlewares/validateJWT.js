require('dotenv').config();
const jwt = require('jsonwebtoken');
const { getUser } = require('../models/users');

const secret = process.env.SECRET_TOKEN;

module.exports = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) return res.status(401).json({ error: 'Token not found!' });

  try {
    const decoded = jwt.verify(token, secret);

    const user = getUser(decoded.data.username);
    if (!user) return res.status(401).json({ message: 'Error when looking for token user!' });

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};
