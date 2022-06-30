import { NextFunction, Request, Response } from 'express';
import { ITournamentsMethods } from '../models/Tournaments';
import { ITournament } from '../schemas/Tournaments';
import TournamentsService from '../services/Tournaments';
import RequestError from '../utils/RequestError';

class TournamentsController {
  constructor(
    private service: ITournamentsMethods = new TournamentsService()
  ) {}

  public findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let tournaments: ITournament[];
      const { runnerUp } = req.query;

      if (runnerUp) {
        if (typeof runnerUp !== 'string') throw new RequestError(422, '"runnerUp" must be a string');
        tournaments = await this.service.findByRunnerUp(runnerUp);
      } else {
        tournaments = await this.service.findAll();
      }

      return res.status(200).json(tournaments);
    } catch (error) {
      next(error);
    }
  };

  public findByYear = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { year } = req.params;
      const tournament = await this.service.findByYear(Number(year));

      return res.status(200).json(tournament);
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tournament = await this.service.create(req.body);

      return res.status(201).json(tournament);
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const tournament = await this.service.update(id, req.body);

      return res.status(200).json(tournament);
    } catch (error) {
      next(error);
    }
  };

  public remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await this.service.remove(id);

      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  };
}

export default TournamentsController;
