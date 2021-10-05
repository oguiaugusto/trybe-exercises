// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5

const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
};

const studentsInMath = () => {
  const mathObj1 = allLessons['lesson1'];
  const mathObj2 = allLessons['lesson3'];
  const students = mathObj1['numeroEstudantes'] + mathObj2['numeroEstudantes'];
  return `${students} alunos assistiram às aulas de Matemática`;
};
console.log(studentsInMath());

const teacherReport = (object, teacher) => {
  const lessons = Object.keys(allLessons);
  const teacherLessons = [];
  const report = {
    professor: `${teacher}`,
  };
  let subjects = [];
  let students = 0;
  for (let i = 0; i < lessons.length; i += 1) {
    const stringLessons = JSON.stringify(object[`${lessons[i]}`]);
    if (stringLessons.includes(`${teacher}`)) {
      teacherLessons.push(lessons[i]);
    }
  }
  for (let i = 0; i < teacherLessons.length; i += 1) {
    const lesson = object[`${teacherLessons[i]}`];
    const subject = lesson['materia'];
    const numberOfStudents = lesson['numeroEstudantes'];
    subjects.push(subject);
    students += numberOfStudents;
  }
  report['aulas'] = subjects;
  report['estudantes'] = students;
  return report;
};
console.log(teacherReport(allLessons, 'Maria Clara'));
