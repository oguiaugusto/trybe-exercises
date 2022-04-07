const express = require('express');
const { Book } = require('../models');

const router = express.Router();

const messages = {
  somethingWentWrong: 'Something went wrong!',
  bookNotFound: 'Book not found!',
};
const getSomethingWentWrong = (res) => res.status(500).json({ message: messages.somethingWentWrong });

router.get('/', async (_req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (error) {
    console.log(error);
    return getSomethingWentWrong(res);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);

    if (!book) return res.status(404).json({ message: messages.bookNotFound });
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return getSomethingWentWrong(res);
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const createdAt = new Date().toJSON().slice(0, 19).replace('T', ' ');
    const createdBook = await Book.create(
      { title, author, pageQuantity, createdAt },
      ['title', 'author', 'page_quantity', 'created_at'],
    );

    return res.status(201).json(createdBook);
  } catch (error) {
    console.log(error);
    return getSomethingWentWrong(res);
  }
});

router.post('/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const createdAt = new Date().toJSON().slice(0, 19).replace('T', ' ');

    const book = { title, author, pageQuantity, createdAt };
    const [updated] = await Book.update(book, { where: { id: req.params.id } });

    if (!updated) return res.status(404).json({ message: messages.bookNotFound });
    return res.status(201).json(book);
  } catch (error) {
    console.log(error);
    return getSomethingWentWrong(res);
  }
});

// router.delete('/:id', async (req, res) => {});

module.exports = router;
