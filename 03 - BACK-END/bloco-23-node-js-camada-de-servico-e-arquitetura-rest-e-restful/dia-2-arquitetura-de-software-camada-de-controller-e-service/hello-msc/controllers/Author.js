const Joi = require('joi');
const Author = require('../services/Author');

const getAll = async (_req, res) => {
  const authors = await Author.getAll();
  return res.status(200).json(authors);
};

const getById = async (req, res, next) => {
  const author = await Author.getById(req.params.id);

  if (author.error) return next(author.error);
  return res.status(200).json(author);
};

const create = async (req, res, next) => {
  const { firstName, middleName, lastName, birthday, nationality } = req.body;

  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required(),
    lastName: Joi.string().not().empty().required(),
  }).validate({ firstName, lastName });
  if (error) return next(error);

  const author = await Author.create(firstName, middleName, lastName, birthday, nationality);
  if (author.error) return next(author.error);

  return res.status(201).json(author);
};

module.exports = {
  getAll,
  getById,
  create,
};
