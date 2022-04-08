const express = require('express');
const {
  validateUsername,
  validateEmail,
  validatePassword,
} = require('../middlewares/validateUserMiddlewares');

const router = express.Router();

router.post(
  '/register',
  validateUsername,
  validateEmail,
  validatePassword,
  (_req, res) => res.status(201).json({ message: 'user created' })
);

router.post(
  '/login',
  validateEmail,
  validatePassword,
  (_req, res) => res.status(200).json({ token: '86567349784e' })
);

module.exports = router;
