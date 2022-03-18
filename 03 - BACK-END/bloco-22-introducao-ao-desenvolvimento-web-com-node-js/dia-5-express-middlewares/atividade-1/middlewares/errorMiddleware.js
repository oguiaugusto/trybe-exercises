const errorMiddleware = (err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ status: 404, message: err.message });
  }

  return res.status(500).json({ message: err.message });
};

module.exports = errorMiddleware;
