import { Schema } from 'mongoose';

export interface ITournament {
  year: number;
  hostCountry: string;
  champions: string;
  runnerUp: string;
  editionGoals?: number;
  editionStrikers?: string[];
  bestPlayer?: string;
  bestGoalkeeper?: string;
  bestYoungPlayer?: string;
};

const TournamentSchema = new Schema<ITournament>({
  year: { type: Number, required: true },
  hostCountry: { type: String, required: true },
  champions: { type: String, required: true },
  runnerUp: { type: String, required: true },
  editionGoals: Number,
  editionStrikers: [String],
  bestPlayer: String,
  bestGoalkeeper: String,
  bestYoungPlayer: String,
}, { versionKey: false });

export default TournamentSchema;
