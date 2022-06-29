import { model as createModel } from 'mongoose';
import BookSchema, { IBook } from '../schemas/BookSchema';

class BookModel {
  constructor(
    private bookModel = createModel<IBook>('books', BookSchema)
  ) {}

  public getBooks = async (): Promise<IBook[]> => {
    const books = this.bookModel.find();
    return books;
  };

  public getBook = async (id: string): Promise<IBook | null> => {
    const book = this.bookModel.findById(id);
    return book;
  };

  public createBook = async (bookData: object): Promise<IBook> => {
    const book = await this.bookModel.create(bookData);
    return book;
  };

  public editBook = async (id: string, bookData: object): Promise<IBook | null> => {
    const book = await this.bookModel.findOneAndUpdate(
      { _id: id },
      { ...bookData },
      { new: true },
    );

    return book;
  };

  public deleteBook = async (id: string): Promise<IBook | null> => {
    const book = await this.bookModel.findByIdAndDelete(id);
    return book;
  };
}

export default BookModel;