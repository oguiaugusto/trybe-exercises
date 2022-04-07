const express = require('express');
const { Book } = require('../models');

const router = express.Router();

const messages = {
  somethingWentWrong: 'Something went wrong!'
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

// router.get('/:id', async (req, res) => {});

// router.post('/', async (req, res) => {});

// router.post('/:id', async (req, res) => {});

// router.delete('/:id', async (req, res) => {});

module.exports = router;
