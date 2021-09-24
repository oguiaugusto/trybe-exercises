const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNightShift = () => lesson2['turno'] = 'noite';
addNightShift();

const listKeys = (object) => console.log(`Chaves: ${Object.keys(object)}`);
listKeys(lesson1);

const objectSize = (object) => console.log(`Tamanho do objeto: ${Object.keys(object).length}`);
objectSize(lesson2);

const listObjectValues = (object) => console.log(`Valores: ${Object.values(object)}`);
listObjectValues(lesson3);

const lesson1Key = Object.create({});
lesson1Key['lesson1'] = lesson1;
const lesson2Key = Object.create({});
lesson2Key['lesson2'] = lesson2;
const lesson3Key = Object.create({});
lesson3Key['lesson3'] = lesson3;
const allLessons = Object.assign({}, lesson1Key, lesson2Key, lesson3Key);
console.log(allLessons);

const numberOfStudents = () => {
  let students = 0;
  const lessons = Object.keys(allLessons);
  for (let i = 0; i < lessons.length; i += 1) {
    const lesson = allLessons[`${lessons[i]}`];
    const number = lesson['numeroEstudantes'];
    students += number;
  }
  return `Número de estudantes: ${students}`;
};
console.log(numberOfStudents());

const keyByIndex = (object, number) => {
  const keys = Object.keys(object);
  const key = keys[number];
  const value = object[`${key}`];
  return value;
}
console.log(keyByIndex(lesson1, 0));

const verifyPair = (object, key, value) => {
  const objEntries = Object.entries(object);
  const stringObjEntries = JSON.stringify(objEntries);
  if (stringObjEntries.includes(`"${key}","${value}"`)) {
    return true;
  }
  return false;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
