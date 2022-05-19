import Teacher from './teacher';

abstract class Evaluation {
  public teacher: Teacher;
  protected _score: number;

  constructor(score: number, teacher: Teacher) {
    this._score = score;
    this.teacher = teacher;
  }

  isScoreSmallerThan(value: number) {
    return this._score < value;
  }

  abstract get score(): number;
  abstract set score(score: number)
}

class Exam extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
    this.score = score;
  }

  get score() { return this._score; }
  set score(score: number) {
    if (this.isScoreSmallerThan(0)) throw new Error('"score" cannot be a negative value');
    if (!this.isScoreSmallerThan(26)) throw new Error('exam score cannot be over 25');
    this._score = score;
  }
}

class Work extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
    this.score = score;
  }

  get score() { return this._score; }
  set score(score: number) {
    if (this.isScoreSmallerThan(0)) throw new Error('"score" cannot be a negative value');
    if (!this.isScoreSmallerThan(51)) throw new Error('exam score cannot be over 50');
    this._score = score;
  }
}

class EvaluationResult {
  public evaluation: Evaluation;
  private _score: number;

  constructor(evaluation: Evaluation, score: number) {
    this.evaluation = evaluation;
    this._score = 0;

    this.score = score;
  }

  get score() { return this._score; }
  set score(score: number) {
    if (score < 0) throw new Error('"score" cannot be a negative value');
    if (score > this.evaluation.score) {
      throw new Error('"score" cannot be over evaluation score');
    }
    this._score = score;
  }
}

export { Exam, Work, EvaluationResult };
