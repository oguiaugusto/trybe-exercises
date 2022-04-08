const Author = require('../models/Author');

const serialize = (authors) => authors.map((a) => ({
  id: a.id,
  firstName: a.first_name,
  middleName: a.middle_name,
  lastName: a.last_name,
  birthday: a.birthday,
  nationality: a.nationality,
}));

const getAll = async () => {
  const authors = await Author.getAll();
  return serialize(authors);
};

const getById = async (id) => {
  const author = await Author.getById(id);

  if (!author) return { error: { code: 'notFound', message: `Author with id ${id} not found` } };
  return serialize(author)[0];
};

const create = async (firstName, middleName = null, lastName, birthday = null, nationality = null) => {
  const existingAuthor = await Author.getByName(firstName, middleName, lastName);
  if (existingAuthor) {
    return { error: { code: 'alreadyExists', message: 'There is already an author with this full name' } };
  }

  const author = await Author.create(firstName, middleName, lastName, birthday, nationality);
  return author;
};

module.exports = {
  getAll,
  getById,
  create,
};
