const Joi = require('joi');
const Books = require('../services/Books');

const getAll = async (_req, res) => {
  const books = await Books.getAll();
  return res.status(200).json(books);
};

const getByAuthorId = async (req, res, next) => {
  const { authorId } = req.query;

  const { error } = Joi.object({
    authorId: Joi.number().not().empty().required(),
  }).validate({ authorId });
  if (error) return next(error);

  const books = await Books.getByAuthorId(authorId);
  if (books.error) return next(books.error);

  return res.status(200).json(books);
};

const getById = async (req, res, next) => {
  const book = await Books.getById(req.params.id);

  if (book.error) return next(book.error);
  return res.status(200).json(book);
};

const create = async (req, res, next) => {
  const { title, authorId } = req.body;

  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    authorId: Joi.number().not().empty().required(),
  }).validate({ title, authorId });
  if (error) return next(error);

  const book = await Books.create(title, authorId);
  if (book.error) return next(book.error);

  return res.status(201).json(book);
};

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create,
};
