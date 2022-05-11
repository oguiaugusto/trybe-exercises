import readline from 'readline-sync';
import connection from './models/connection';
import BookModel, { Book } from './models/Book';

type Actions = {
  [key: string]: (bookModel: BookModel) => Promise<void>;
};

const actions: Actions = {
  criar: async (bookModel: BookModel): Promise<void> => {
    const title:string = readline.question('Digite o nome do livro: ');
    const price:number = readline.questionFloat('Digite o preço do livro: ');
    const author:string = readline.question('Digite o autor do livro: ');
    const isbn:string = readline.question('Digite o isbn do livro: ');
    
    const createdBook: Book = await bookModel.create({ title, price, author, isbn });
    
    console.log('\n Livro adicionado com sucesso!\n');
    console.log(createdBook);
  },
  ver: async (bookModel: BookModel): Promise<void> => {
    const books: Book[] = await bookModel.getAll();
    console.log('\nLivros:\n');
    console.log(books);
  },
};


const main = async (): Promise<void> => {
  const bookModel: BookModel = new BookModel(connection);
  
  const actionsNames: string[] = Object.keys(actions);
  const actionIndex: number = readline.keyInSelect(actionsNames, 'Selecione uma ação:');
  const action:string = actionsNames[actionIndex];

  actions[action](bookModel);
};

main();
