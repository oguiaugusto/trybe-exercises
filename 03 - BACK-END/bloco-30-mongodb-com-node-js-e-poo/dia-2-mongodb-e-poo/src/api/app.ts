import 'dotenv/config';
import { NextFunction } from 'connect';
import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'
import connect from '../models/connection';

class App {
  private express: express.Express;

  constructor() {
    this.express = express();
    this.config();
    this.routes();
    this.errorMiddleware();

    connect(process.env.MONGODB_URI);
  }

  private config() {
    this.express.use(express.json());
  }

  private routes() {
    this.express.get('/', (_req: Request, res: Response) => (
      res.status(StatusCodes.OK).json({ message: 'Running' })
    ))
  }

  private errorMiddleware() {
    this.express.use(
      (_err: Error, _req: Request, res: Response, _next: NextFunction) => {
        const status = StatusCodes.INTERNAL_SERVER_ERROR;
        const message = 'Internal Server Error';

        return res.status(status).json({ message })
      }
    );
  }

  public start(PORT: number | string = 3001) {
    this.express.listen(PORT, () => console.log(`Running on port: ${PORT}`));
  }
}

export default App;
