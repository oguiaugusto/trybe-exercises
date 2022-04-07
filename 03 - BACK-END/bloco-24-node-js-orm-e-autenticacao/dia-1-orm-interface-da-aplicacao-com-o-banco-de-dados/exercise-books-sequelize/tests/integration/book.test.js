const chai = require('chai');
const chaiHttp = require('chai-http');
const { stub } = require('sinon');

chai.use(chaiHttp);
const { expect } = chai;

const app = require('../../index');
const { Book } = require('../../models');

const booksExample = [
  {
    id: 3,
    title: 1984,
    author: 'George Orwell',
    pageQuantity: 384,
    createdAt: '2022-04-07T05:56:03.000Z'
  },
  {
    id: 2,
    title: 'Ten Little Niggers',
    author: 'Agatha Cristie',
    pageQuantity: 272,
    createdAt: '2022-04-07T01:00:05.000Z'
  },
  {
    id: 1,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pageQuantity: 310,
    createdAt: '2022-04-07T01:00:05.000Z'
  },
];
const bookExample = {
  id: 1,
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  pageQuantity: 310,
  createdAt: '2022-04-07T01:00:05.000Z'
};

const errorMessages = {
  bookNotFound: { message: 'Book not found!' },
  somethingWentWrong: { message: 'Something went wrong!' },
};

const expectStatusToBe = (response, value) => (
  expect(response.status).to.be.equals(value)
);
const expectArrayResponseToBe = (response, expectedArray) => (
  expect(response.body).to.have.deep.members(expectedArray)
);
const expectObjectResponseToBe = (response, expectedObject) => (
  expect(response.body).to.be.eql(expectedObject)
);

describe('Tests for booksController: endpoint', () => {
  describe('GET /books should', () => {
    describe('when no book is found', () => {
      let response;
      before(async () => {
        stub(Book, 'findAll').resolves([]);

        response = await chai.request(app).get('/books');
      });
      after(() => Book.findAll.restore());

      it('status is 200', async () => {
        expectStatusToBe(response, 200);
      });
      it('response is an empty array', async () => {
        expectArrayResponseToBe(response, []);
      });
    });
    describe('when books are found', () => {
      let response;
      before(async () => {
        stub(Book, 'findAll').resolves(booksExample);

        response = await chai.request(app).get('/books');
      });
      after(() => Book.findAll.restore());

      it('status is 200', async () => {
        expectStatusToBe(response, 200);
      });
      it('response is an array containing the books', async () => {
        expectArrayResponseToBe(response, booksExample);
      });
    });
  });
  describe('GET /books/:id should', () => {
    describe('when book is not found', () => {
      let response;
      before(async () => {
        stub(Book, 'findByPk').resolves(null);

        response = await chai.request(app).get('/books/512');
      });
      after(() => Book.findByPk.restore());

      it('status is 404', async () => {
        expectStatusToBe(response, 404);
      });
      it('response is an error message `Book not found!`', async () => {
        expectObjectResponseToBe(response, errorMessages.bookNotFound);
      });
    });
    describe('when book is found', () => {
      let response;
      before(async () => {
        stub(Book, 'findByPk').resolves(bookExample);

        response = await chai.request(app).get('/books/1');
      });
      after(() => Book.findByPk.restore());

      it('status is 200', async () => {
        expectStatusToBe(response, 200);
      });
      it('response is an object containing the book', async () => {
        expectObjectResponseToBe(response, bookExample);
      });
    });
  });
  describe('GET /books/search should', () => {
    describe('when no book is found', () => {
      let response;
      before(async () => {
        stub(Book, 'findAll').resolves([]);

        response = await chai.request(app).get('/books/search?author=nobody');
      });
      after(() => Book.findAll.restore());

      it('status is 404', async () => {
        expectStatusToBe(response, 404);
      });
      it('response is an error message `Book not found!`', async () => {
        expectObjectResponseToBe(response, errorMessages.bookNotFound);
      });
    });
    describe('when books are found', () => {
      let response;
      before(async () => {
        stub(Book, 'findAll').resolves([bookExample]);

        response = await chai.request(app).get('/books/search?author=tolkien');
      });
      after(() => Book.findAll.restore());

      it('status is 200', async () => {
        expectStatusToBe(response, 200);
      });
      it('response is an array containing the books', async () => {
        expectArrayResponseToBe(response, [bookExample]);
      });
    });
  });
  describe('POST /books should', () => {
    describe('when some error occurs', () => {
      let response;
      before(async () => {
        stub(Book, 'create').rejects();
        stub(console, 'log').returns('');

        response = await chai.request(app).post('/books');
      });
      after(() => Book.create.restore());

      it('status is 500', async () => {
        expectStatusToBe(response, 500);
      });
      it('response is an error message `Something went wrong!`', async () => {
        expectObjectResponseToBe(response, errorMessages.somethingWentWrong);
      });
    });
    describe('when the book is created', () => {
      let response;
      before(async () => {
        stub(Book, 'create').resolves(bookExample);

        response = await chai
          .request(app)
          .post('/books')
          .send({
            title: bookExample.title,
            author: bookExample.author,
            pageQuantity: bookExample.pageQuantity,
          });
      });
      after(() => Book.create.restore());

      it('status is 201', async () => {
        expectStatusToBe(response, 201);
      });
      it('response is an object containing the created book', async () => {
        expectObjectResponseToBe(response, bookExample);
      });
    });
  });
  describe.skip('POST /books/:id should', () => {
    describe('when an error occurs', () => {
      it('status is 500', async () => {
        expectStatusToBe(response, 500);
      });
      it('response is an error message `Something went wrong!`', async () => {
        expectObjectResponseToBe(response, errorMessages.somethingWentWrong);
      });
    });
    describe('when book is not found', () => {
      it('status is 404', async () => {});
      it('response is an error message `Book not found!`', async () => {});
    });
    describe('when the book is overwritten', () => {
      it('status is 201', async () => {});
      it('response is an object containing the overwritten book', async () => {});
    });
  });
  describe.skip('DELETE /books/:id should', () => {
    describe('when an error occurs', () => {
      it('status is 500', async () => {});
      it('response is an error message `Something went wrong!`', async () => {});
    });
    describe('when book is not found', () => {
      it('status is 404', async () => {});
      it('response is an error message `Book not found!`', async () => {});
    });
    describe('when the book is deleted', () => {
      it('status is 200', async () => {});
      it('response does not contain a body', async () => {});
    });
  });
});
