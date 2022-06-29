import TournamentsModel, { ITournamentsMethods } from '../models/Tournaments';

class TournamentsService {
  constructor(
    private model: ITournamentsMethods = new TournamentsModel()
  ) {}

  public findAll = async () => {
    const tournaments = await this.model.findAll();
    return tournaments;
  };
}

export default TournamentsService;
