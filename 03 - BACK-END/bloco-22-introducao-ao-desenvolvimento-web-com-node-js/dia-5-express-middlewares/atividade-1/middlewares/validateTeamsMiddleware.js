const getError = (res) => res.status(400).json({ status: 400, message: 'Invalid data' });

const validateName = (req, res, next) => {
  const { name } = req.body;

  if (name.length < 6) return getError(res);
  next();
};

const validateInitials = (req, res, next) => {
  const { initials } = req.body;
  const upperCaseRegex = new RegExp('^[A-Z]+$');

  if (initials.length > 3 || !upperCaseRegex.test(initials)) return getError(res);
  next();
};

const validateCountry = (req, res, next) => {
  const { country } = req.body;

  if (country.length < 4) return getError(res);
  next();
};

module.exports = { validateName, validateInitials, validateCountry };
