import express, { Express, NextFunction, Request, Response } from 'express';
import connection from '../models/connection';
import routes from '../routes';
import RequestError from '../utils/RequestError';

class App {
  public express: Express;

  constructor() {
    this.express = express();
    this.config();
    this.routes();
    this.errorMiddleware();

    connection();
  }

  private config() {
    this.express.use(express.json());
  }

  private routes() {
    this.express.get('/', (_req: Request, res: Response) => {
      res.status(200).json({ message: 'Online!' });
    });

    this.express.use(routes);
  }

  private errorMiddleware() {
    this.express.use(
      (err: Error, _req: Request, res: Response, _next: NextFunction) => {
        let status = 500;
        let message = 'Internal Server Error';

        if (err instanceof RequestError) {
          status = err.status;
          message = err.message;
        }

        return res.status(status).json({ message });
      }
    );
  }
}

export default App;
