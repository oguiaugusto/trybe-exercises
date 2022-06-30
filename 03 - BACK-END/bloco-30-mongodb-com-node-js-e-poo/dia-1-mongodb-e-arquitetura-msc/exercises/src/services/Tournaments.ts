import TournamentsModel, { ITournamentsMethods } from '../models/Tournaments';
import { ITournament } from '../schemas/Tournaments';
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

  public create = async (tournament: ITournament) => {
    const createdTournament = await this.model.create(tournament);
    return createdTournament;
  };

  public update = async (id: string, tournament: Partial<ITournament>) => {
    const updatedTournament = await this.model.update(id, tournament);
    if (!updatedTournament) throw new RequestError(404, 'Tournament not found');

    return updatedTournament;
  };

  public remove = async (id: string) => {
    const removedTournament = await this.model.remove(id);
    if (!removedTournament) throw new RequestError(404, 'Tournament not found');

    return removedTournament;
  };
}

export default TournamentsService;
