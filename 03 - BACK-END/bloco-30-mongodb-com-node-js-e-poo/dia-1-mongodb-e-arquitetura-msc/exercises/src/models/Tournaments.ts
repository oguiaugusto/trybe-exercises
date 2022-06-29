import mongoose from 'mongoose';
import TournamentSchema, { ITournament } from '../schemas/Tournaments';

export interface ITournamentsMethods {
  findAll: () => Promise<ITournament[]>;
  findByYear: (year: number) => Promise<ITournament | null>;
}

class TournamentsModel implements ITournamentsMethods {
  constructor(
    private model = mongoose.model('Tournaments', TournamentSchema)
  ) {}

  public findAll = async (): Promise<ITournament[]> => {
    const tournaments = await this.model.find();
    return tournaments;
  }

  public findByYear = async (year: number): Promise<ITournament | null> => {
    const tournament = await this.model.findOne({ year });
    return tournament;
  }
}

export default TournamentsModel;