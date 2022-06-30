import { model, Model as MongooseModel } from 'mongoose';
import IRecordStoreModel from './IRecordStoreModel';

abstract class MongoModel<T> implements IRecordStoreModel<T> {
  constructor(protected model = MongooseModel<T & Document>) {}

  public create = async (data: T): Promise<T> => this.model.create(data);
  public readOne = async (id: string): Promise<T | null> => this.model.findById(id);
  public read = async (): Promise<T[]> => this.model.find();
  public delete = async (id: string): Promise<T | null> => this.model.findByIdAndDelete(id);

  public update = async (): Promise<T[]> => {
    const updatedItems = await this.model.updateMany(
      { format: 'CD', yearPublished: { $lte: 1997 } },
      { new: false },
      { new: true }
    );

    return this.model.find({ format: 'CD', yearPublished: { $lte: 1997 } });
  };
}

export default MongoModel;
