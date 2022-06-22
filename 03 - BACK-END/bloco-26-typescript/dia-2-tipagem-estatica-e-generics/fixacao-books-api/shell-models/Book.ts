import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';

export interface Book {
  id?: number,
  title: string,
  price: number,
  author: string,
  isbn: string,
};

export default class BookModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> {
    const [rows] = await this.connection.execute<RowDataPacket[] & Book[]>('SELECT * FROM books');
    return rows as Book[];
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn],
    );
    return { id: insertId, ...book };
  }
};
