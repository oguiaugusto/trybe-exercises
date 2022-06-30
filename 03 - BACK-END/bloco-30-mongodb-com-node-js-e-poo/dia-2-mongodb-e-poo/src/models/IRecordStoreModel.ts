interface IRecordStoreModel<T> {
  create: (data: T) => Promise<T>;
  readOne: (id: string) => Promise<T | null>;
  read: () => Promise<T[]>;
  update: () => Promise<T[]>;
  delete: (id: string) => Promise<T | null>;
}

export default IRecordStoreModel;
