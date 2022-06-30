interface IRecordStoreModel<T> {
  create: (data: T) => Promise<T>;
  readOne: (id: string) => Promise<T | null>;
  read: () => Promise<T[]>;
  update: (id: string, data: T) => Promise<T | null>;
  delete: (id: string) => Promise<T | null>;
}

export default IRecordStoreModel;
