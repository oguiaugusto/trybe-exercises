const Books = require('../models/Books');
const Author = require('../models/Author');

const serialize = (books) => books.map((b) => ({
  id: b.id,
  title: b.title,
  authorId: b.author_id,
}))

const getAll = async () => {
  const books = await Books.getAll();
  return serialize(books);
};

const getByAuthorId = async (id) => {
  const author = await Author.getById(id);
  if (!author) return { error: { code: 'notFound', message: `Author with id ${id} not found` } };

  const books = await Books.getByAuthorId(id);
  if (!books) return { error: { code: 'notFound', message: `No books were found with author id ${id}` }};

  return serialize(books);
};

const getById = async (id) => {
  const book = await Books.getById(id);

  if (!book) return { error: { code: 'notFound', message: `Book with id ${id} not found` } };
  return serialize(book)[0];
}

const create = async (title, authorId) => {
  const existingBook = await Books.findByTitleAndAuthor(title, authorId);
  if (existingBook) {
    return { error: { code: 'alreadyExists', message: 'A book with this title and author_id already exists' } };
  }

  const existingAuthor = await Author.getById(authorId);
  if (!existingAuthor) return { error: { code: 'conflict', message: `Author with id ${authorId} not found` } };

  const book = await Books.create(title, authorId);
  return book;
}

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create,
};
