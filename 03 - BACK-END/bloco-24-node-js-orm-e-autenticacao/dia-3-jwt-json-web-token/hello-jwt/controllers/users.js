require('dotenv').config();

const getUser = (req, res) => {
  const user = req.user.data;
  return res.status(200).json(user);
};

const topSecret = (req, res) => {
  const user = req.user.data;

  if (!user.admin) return res.status(403).json({ message: 'Restricted access!' });
  return res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
};

module.exports = { getUser, topSecret };
