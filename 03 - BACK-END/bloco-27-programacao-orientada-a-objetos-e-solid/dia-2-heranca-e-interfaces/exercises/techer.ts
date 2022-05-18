import * as crypto from 'crypto';
import Person from './person';
import Subject from './subject';
import IEmployee from './employeeInterface';

class Teacher extends Person implements IEmployee {
  private _subject: Subject;
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    
    this._salary = 0;
    this._registration = '';
    this._admissionDate = new Date();
    
    this._subject = subject;
    this.salary = salary;
  }

  get registration() { return this._registration; }
  get salary() { return this._salary; }
  get admissionDate() { return this._admissionDate; }
  get subject() { return this._subject; }

  set registration(registration: string) {
    if (registration.length < 16) throw new Error('"registration" must be at leas 16 characters long');
    this._registration = registration;
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

  public generateRegistration() {
    return crypto.randomBytes(8).toString('hex');
  }
}

const historySub = new Subject('History');

const mark = new Teacher('Mark Denver', new Date('October 09, 1975'), 3000, historySub);
mark.registration = mark.generateRegistration();

console.log(`Name: ${mark.name}`);
console.log(`Birthdate: ${mark.birthDate.toDateString()}`);
console.log(`Teaches: ${mark.subject.name}`);
console.log(`Salary: ${mark.salary}`);
console.log(`Registration: ${mark.registration}`);
console.log(`Admission date: ${mark.admissionDate.toLocaleDateString()}`);
console.log(`Is a teacher: ${mark instanceof Teacher}`);
