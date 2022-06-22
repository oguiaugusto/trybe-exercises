class Student {
  private _registry: string;
  private _name: string;
  private _testGrades: number[];
  private _workGrades: number[];

  constructor(registry: string, name: string) {
    this._registry = registry;
    this._name = name;
    this._testGrades = [];
    this._workGrades = [];
  }

  get registry() { return this._registry; }
  get name() { return this._name; }
  get testGrades() { return this._testGrades; }
  get workGrades() { return this._workGrades; }

  set registry(registry: string) { this._registry = registry; }
  set name(name: string) { this._name = name; }
  set testGrades(grades: number[]) {
    if (grades.length > 4) throw new Error('"testGrades" length cannot be grater than 4');
    this._testGrades = grades;
  }
  set workGrades(grades: number[]) {
    if (grades.length > 2) throw new Error('"workGrades" length cannot be grater than 2');
    this._workGrades = grades;
  }

  public sumGrades(): number {
    const grades = [...this.testGrades, ...this.workGrades];
    return grades.reduce((sum: number, grade: number) => sum + grade, 0);
  };

  public getAverage(): number {
    const grades = this.sumGrades();
    return Math.round(grades / (this.testGrades.length + this.workGrades.length));
  }
}

const student = new Student('20123', 'João');
student.testGrades = [1, 2, 3, 4];
student.workGrades = [5, 6];
console.log(student.sumGrades());
console.log(student.getAverage());
