import mongoose from 'mongoose';
import TournamentSchema, { ITournament } from '../schemas/Tournaments';

export interface ITournamentsMethods {
  findAll: () => Promise<ITournament[]>;
}

class TournamentsModel implements ITournamentsMethods {
  constructor(
    private model = mongoose.model('Tournaments', TournamentSchema)
  ) {}

  public findAll = async (): Promise<ITournament[]> => {
    const tournaments = await this.model.find();
    return tournaments;
  }
}

export default TournamentsModel;