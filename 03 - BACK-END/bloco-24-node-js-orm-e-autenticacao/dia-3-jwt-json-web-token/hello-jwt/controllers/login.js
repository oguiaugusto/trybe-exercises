require('dotenv').config();
const jwt = require('jsonwebtoken');
const { getUser } = require('../models/users');

const secret = process.env.SECRET_TOKEN;
const jwtOptions = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

module.exports = (req, res) => {
  try {
    const { username, password } = req.body;
  
    if (!username || !password)
      return res.status(400).json({ message: 'username and/or password cannot be empty!' });
  
    const user = getUser(username);
    if (!user || password !== user.password) return res.status(404).json({ message: 'user not found or password is invalid!' });
  
    const userData = {
      username: user.username,
      admin: (user.username === 'admin' && user.password === 's3nh4S3gur4???'),
    };
    const token = jwt.sign({ data: userData }, secret, jwtOptions);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};
