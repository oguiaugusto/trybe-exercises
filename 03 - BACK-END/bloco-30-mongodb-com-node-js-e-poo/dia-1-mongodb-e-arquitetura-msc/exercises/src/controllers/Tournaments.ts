import { NextFunction, Request, Response } from 'express';
import { ITournamentsMethods } from '../models/Tournaments';
import TournamentsService from '../services/Tournaments';

class TournamentsController {
  constructor(
    private service: ITournamentsMethods = new TournamentsService()
  ) {}

  public findAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const tournaments = await this.service.findAll();

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
}

export default TournamentsController;
