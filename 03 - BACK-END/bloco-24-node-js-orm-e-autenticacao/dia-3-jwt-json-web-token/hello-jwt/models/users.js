const data = require('../data.json');

const getUser = (username) => {
  const user = data.find((u) => u.username === username);
  
  if (!user) return null;
  return user;
};

module.exports = { getUser };
