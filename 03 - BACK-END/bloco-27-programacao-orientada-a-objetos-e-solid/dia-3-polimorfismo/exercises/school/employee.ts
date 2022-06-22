import Person from '../person';
import * as crypto from 'crypto';
import IEnrollable from './IEnrollable';

class Employee extends Person implements IEnrollable {
  private _enrollment: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);
    
    this._salary = 0;
    this._admissionDate = new Date();
    this._enrollment = this.generateEnrollment();;
    this.salary = salary;
  }

  get enrollment() { return this._enrollment; }
  get salary() { return this._salary; }
  get admissionDate() { return this._admissionDate; }

  set enrollment(enrollment: string) {
    if (enrollment.length < 16) throw new Error('"enrollment" must be at leas 16 characters long');
    this._enrollment = enrollment;
  };
  set salary(salary: number) {
    if (salary < 0) throw new Error('"salary" cannot be a negative number');
    this._salary = salary;
  }
  set admissionDate(admissionDate: Date) {
    const now = new Date();

    if (admissionDate > now) throw new Error('"admissionDate" cannot be in the future');
    this._admissionDate = admissionDate;
  }

  public generateEnrollment(): string {
    return crypto.randomBytes(8).toString('hex');
  }
}

export default Employee;