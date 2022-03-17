const validUsers = [
  { username: 'MestreCuca', password: 'senhafolclore' },
  { username: 'McRonald', password: 'senhamcronaldo' },
  { username: 'Burger Queen', password: 'senhaburgao' },
  { username: 'UpWay', password: 'senhametro' },
];


const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username || !password) {
    return res.status(401).json({ message: 'Username or passowrd cannot be blank' });
  }

  const user = validUsers.find((u) => u.username === username);

  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  if (username !== user.username || password !== user.password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  req.user = user;

  next();
};

module.exports = authMiddleware;
