const Author = require('../models/Author');

const serialize = (authors) => authors.map((a) => ({
  id: a.id,
  firstName: a.first_name,
  middleName: a.middle_name,
  lastName: a.last_name,
  birthday: a.birthday,
  nationality: a.nationality,
}));

const isValid = (...fields) => fields.every((f) => f && typeof f === 'string');

const getAll = async () => {
  const authors = await Author.getAll();
  return serialize(authors);
};

const getById = async (id) => {
  const author = await Author.getById(id);

  if (!author) return author;
  return serialize(author)[0];
};

const create = async (firstName, middleName = null, lastName, birthday = null, nationality = null) => {
  if (!isValid(firstName, lastName)) return false;

  const author = await Author.create(firstName, middleName, lastName, birthday, nationality);
  return author;
};

module.exports = {
  getAll,
  getById,
  create,
};
