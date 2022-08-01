import IRecordStoreModel from '../models/IRecordStoreModel';

abstract class MongoService<T> {
  constructor(protected model: IRecordStoreModel<T>) {}

  public create = async (data: T): Promise<T> => this.model.create(data);
  public readOne = async (id: string): Promise<T> => {
    const 
  };
  public read = async (): Promise<T[]> => ;
  public delete = async (id: string): Promise<T> => ;
  public update = async (): Promise<T[]> => ;
}
