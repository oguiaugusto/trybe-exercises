const validateBtcToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization.length !== 12 || typeof authorization !== 'string') {
    return res.status(401).json({ status: 401, message: 'Invalid token' });
  }

  next();
};

module.exports = validateBtcToken;
