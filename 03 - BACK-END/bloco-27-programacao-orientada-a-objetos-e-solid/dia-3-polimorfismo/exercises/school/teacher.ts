import * as crypto from 'crypto';
import Employee from './employee';
import Subject from './subject';

class Teacher extends Employee {
  private _subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate, salary);
    
    this._subject = subject;
  }

  get subject() { return this._subject; }
  set subject(subject: Subject) { this._subject = subject; }

  public generateRegistration() {
    return crypto.randomBytes(8).toString('hex');
  }
}

const historySub = new Subject('History');

const mark = new Teacher('Mark Denver', new Date('October 09, 1975'), 3000, historySub);

export default Teacher;
