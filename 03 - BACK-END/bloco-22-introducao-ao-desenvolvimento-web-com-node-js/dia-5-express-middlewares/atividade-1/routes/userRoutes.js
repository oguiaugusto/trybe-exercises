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

router

module.exports = router;
