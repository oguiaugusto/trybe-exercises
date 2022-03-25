const Author = require('../services/Author');

const getAll = async (_req, res) => {
  const authors = await Author.getAll();
  return res.status(200).json(authors);
};

const getById = async (req, res) => {
  const author = await Author.getById(req.params.id);

  if (!author) return res.status(404).json({ message: 'Author not found' });
  return res.status(200).json(author);
};

const create = async (req, res) => {
  const { first_name, middle_name, last_name, birthday, nationality } = req.body;

  const author = await Author.create(first_name, middle_name, last_name, birthday, nationality);

  if (!author) return res.status(400).json({ message: 'Invalid data' });
  return res.status(201).json(author);
};

module.exports = {
  getAll,
  getById,
  create,
};
