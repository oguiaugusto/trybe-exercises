import * as crypto from 'crypto';
import Person from './person';

class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);

    this._enrollment = this.getEnrollment();
    this._examsGrades = [];
    this._worksGrades = [];
  }

  get enrollment() { return this._enrollment; }
  get examsGrades() { return this._examsGrades; }
  get worksGrades() { return this._worksGrades; }

  set enrollment(enrollment: string) { this._enrollment = enrollment; }
  set examsGrades(grades: number[]) {
    if (grades.length > 4) throw new Error('"examsGrades" length cannot be grater than 4');
    this._examsGrades = grades;
  }
  set worksGrades(grades: number[]) {
    if (grades.length > 2) throw new Error('"worksGrades" length cannot be grater than 2');
    this._worksGrades = grades;
  }

  public sumGrades(): number {
    const grades = [...this.examsGrades, ...this.worksGrades];
    return grades.reduce((sum: number, grade: number) => sum + grade, 0);
  };

  public getAverage(): number {
    const grades = this.sumGrades();
    return Math.round(grades / (this.examsGrades.length + this.worksGrades.length));
  }

  private getEnrollment(): string {
    return crypto.randomBytes(8).toString('hex');
  }
}

export default Student;
