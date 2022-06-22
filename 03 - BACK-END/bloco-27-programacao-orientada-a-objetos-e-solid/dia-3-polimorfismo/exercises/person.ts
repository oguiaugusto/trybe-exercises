abstract class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = '';
    this._birthDate = new Date();

    this.name = name;
    this.birthDate = birthDate;
  }

  get name() { return this._name; }
  get birthDate() { return this._birthDate; }

  set name(name: string) {
    if (name.length < 3) throw new Error('"name" must be at least 3 characters long');
    this._name = name;
  }
  set birthDate(birthDate: Date) {
    const now = new Date();
    const age = now.getFullYear() - birthDate.getFullYear();
    
    if (birthDate > now) throw new Error('"birthDate" cannot be in the future');
    if (age > 120) throw new Error('Person cannot be older than 120 years old');
    
    this._birthDate = birthDate;
  }
}

export default Person;
