import express, { Express, Request, Response } from 'express';

class App {
  public express: Express;

  constructor() {
    this.express = express();
    this.config();
    this.routes();
  }

  private config() {
    this.express.use(express.json());
  }

  private routes() {
    this.express.get('/', (_req: Request, res: Response) => {
      res.status(200).json({ message: 'Online!' });
    });
  }
}

export default App;
