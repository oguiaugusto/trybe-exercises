const movieModel = require('../models/movieModel');

const isValid = {
  title: (title) => !title || title.length < 1 || typeof title !== 'string',
  directedBy: (directedBy) => !directedBy || directedBy.length < 1 || typeof directedBy !== 'string',
  releaseYear: (releaseYear) => !releaseYear || typeof releaseYear !== 'number',
};

const isAllValid = (title, directedBy, releaseYear) => (
  !isValid.title(title) || !isValid.directedBy(directedBy) || !isValid.releaseYear(releaseYear)
)

const create = async ({ title, directedBy, releaseYear }) => {
  if (!isAllValid(title, directedBy, releaseYear)) {
    return { error: { code: 400, message: 'Invalid data' } };
  };

  const movie = await movieModel.create({ title, directedBy, releaseYear });
  return movie;
};

module.exports = {
  create,
};
