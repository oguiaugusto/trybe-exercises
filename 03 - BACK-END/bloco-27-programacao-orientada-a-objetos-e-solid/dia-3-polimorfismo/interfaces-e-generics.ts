interface ICharacter {
  name: string;
  specialMove: string;
}

interface IModel {
  listAll(): Promise<DbCharacter[]>;
  create(c: ICharacter): Promise<DbCharacter>;
  update(id: number, c: ICharacter): Promise<DbCharacter>;
  remove(id: number): Promise<void>;
  getById(id: number): Promise<DbCharacter>;
}

interface DbCharacter extends ICharacter {
  id: number;
}

class LocalDBModel implements IModel {
  private _db: DbCharacter[];

  constructor(db: DbCharacter[] = []) {
    this._db = db;
  }

  private findIndexById(id: number) {
    const index = this._db.findIndex((c) => c.id === id);
    if (index < 0) throw new Error(`Character of id ${id} not found`);
    return index;
  }

  listAll = async () => {
    return this._db;
  };

  create = async (character: ICharacter) => {
    const id = this._db.length === 0 ? 1 : this._db.length;
    const newRow = { id, ...character } as DbCharacter;
    this._db.push(newRow);
    return newRow;
  };

  update = async (id: number, character: ICharacter) => {
    const index = this.findIndexById(id);
    this._db[index] = { ...this._db[index], ...character };
    return this._db[index];
  };

  remove = async (id: number) => {
    this._db = this._db.filter((c) => c.id !== id);
  };

  getById = async (id: number) => {
    const index = this.findIndexById(id);
    return this._db[index];
  };
}

class CharacterService {
  readonly model: IModel;

  constructor() {
    this.model = new LocalDBModel();
  }

  // Imagine aqui os metodos CRUD;
}
