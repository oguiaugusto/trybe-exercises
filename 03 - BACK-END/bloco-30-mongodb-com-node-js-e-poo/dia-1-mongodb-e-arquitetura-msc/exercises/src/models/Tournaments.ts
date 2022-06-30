import mongoose from 'mongoose';
import TournamentSchema, { ITournament } from '../schemas/Tournaments';

export interface ITournamentsMethods {
  findAll: () => Promise<ITournament[]>;
  findByYear: (year: number) => Promise<ITournament | null>;
  create: (tournament: ITournament) => Promise<ITournament>;
  update: (id: string, tournament: Partial<ITournament>) => Promise<ITournament | null>;
  remove: (id: string) => Promise<ITournament | null>;
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

  public create = async (tournament: ITournament): Promise<ITournament> => {
    const createdTournament = await this.model.create(tournament);
    return createdTournament;
  };

  public update = async (id: string, tournament: Partial<ITournament>): Promise<ITournament | null> => {
    const updatedTournament = await this.model.findByIdAndUpdate(id, tournament, { new: true });
    return updatedTournament;
  };

  public remove = async (id: string): Promise<ITournament | null> => {
    const removedTournament = await this.model.findByIdAndDelete(id);
    return removedTournament;
  }
}

export default TournamentsModel;