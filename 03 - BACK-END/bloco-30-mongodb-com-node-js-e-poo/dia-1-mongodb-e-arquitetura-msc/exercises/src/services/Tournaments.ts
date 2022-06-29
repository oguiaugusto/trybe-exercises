import TournamentsModel, { ITournamentsMethods } from '../models/Tournaments';
import RequestError from '../utils/RequestError';

class TournamentsService implements ITournamentsMethods {
  constructor(
    private model: ITournamentsMethods = new TournamentsModel()
  ) {}

  public findAll = async () => {
    const tournaments = await this.model.findAll();
    return tournaments;
  };

  public findByYear = async (year: number) => {
    const tournament = await this.model.findByYear(year);
    if (!tournament) throw new RequestError(404, 'Tournament not found');

    return tournament;
  };
}

export default TournamentsService;
