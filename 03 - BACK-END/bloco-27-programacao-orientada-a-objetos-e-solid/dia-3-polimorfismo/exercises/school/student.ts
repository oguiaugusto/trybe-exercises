import * as crypto from 'crypto';
import { EvaluationResult, Exam, Work } from './evaluations';
import IEnrollable from './IEnrollable';
import Person from '../person';
import Subject from './subject';
import Teacher from './teacher';

class Student extends Person implements IEnrollable {
  private _enrollment: string;
  public evaluationResults: EvaluationResult[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);

    this._enrollment = this.generateEnrollment();
    this.evaluationResults = [];
  }

  get enrollment() { return this._enrollment; }

  set enrollment(enrollment: string) { this._enrollment = enrollment; }

  public sumGrades(): number {
    return this
      .evaluationResults
      .reduce((sum: number, { score }) => sum + score, 0);
  };

  public getAverage(): number {
    const grades = this.sumGrades();
    return Math.round(grades / this.evaluationResults.length);
  }

  public addEvaluationResult(evaluation: EvaluationResult) {
    this.evaluationResults.push(evaluation);
  }

  public generateEnrollment(): string {
    return crypto.randomBytes(8).toString('hex');
  }
}

export default Student;
