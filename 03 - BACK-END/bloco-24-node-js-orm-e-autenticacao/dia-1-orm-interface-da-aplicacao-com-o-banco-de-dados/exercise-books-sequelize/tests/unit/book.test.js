const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const bookModel = require('../../models/book');

describe('Book model', () => {
  const Book = bookModel(sequelize, dataTypes);
  const book = new Book();

  describe('has the name `Book`', () => {
    checkModelName(Book)('Book');
  });

  describe('has properties `title`, `author` and `pageQuantity`', () => {
    ['title', 'author', 'pageQuantity'].forEach(checkPropertyExists(book));
  });
});
