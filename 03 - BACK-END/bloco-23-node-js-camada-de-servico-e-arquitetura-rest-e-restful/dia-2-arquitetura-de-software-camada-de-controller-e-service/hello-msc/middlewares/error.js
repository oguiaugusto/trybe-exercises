module.exports = (err, _req, res, _next) => {
  if (err.isJoi) return res.status(400).json({ error: { message: err.details[0].message } });

  const statusByCode = {
    notFound: 404,
    alreadyExists: 409,
    conflict: 409,
  };
  const status = statusByCode[err.code];

  return res.status(status).json({ error: { message: err.message } });
};