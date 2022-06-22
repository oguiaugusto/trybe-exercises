class Subject {
  private _name: string;

  constructor(name: string) {
    this._name = '';

    this.name = name;
  }

  get name() { return this._name; }
  set name(name: string) {
    if (name.length < 3) throw new Error('"name" must be at least 3 characters long');
    this._name = name;
  }
}

export default Subject;
