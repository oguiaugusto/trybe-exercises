const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../models/user');

describe('User model', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  describe('has the name `User`', () => {
    checkModelName(User)('User');
  });
  describe('has the properties `fullName` and `email`', () => {
    ['fullName', 'email'].forEach(checkPropertyExists(user));
  });
});
