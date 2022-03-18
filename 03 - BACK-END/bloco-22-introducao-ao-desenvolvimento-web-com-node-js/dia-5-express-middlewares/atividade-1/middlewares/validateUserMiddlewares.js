const express = require('express');

const validateUsername = (req, res, next) => {
  const { username } = req.body;

  if (username.length < 4) {
    return res.status(400).json({
      status: 400,
      message: 'Username must be at least 4 characters long',
    });
  }

  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm)) {
    return res.status(400).json({ status: 400, message: 'Invalid email format' });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (password.length < 4 || password.length > 8 || password.match(/\D+/g)) {
    return res.status(400).json({
      status: 400,
      message: 'Password must be between 4 and 8 characters long (numbers only)',
    });
  }

  next();
};

module.exports = { validateUsername, validateEmail, validatePassword };
