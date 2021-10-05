// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const objectsInside = Object.values(professionalBoard);

const getAllIds = () => {
  const ids = [];
  for (let i = 0; i < professionalBoard.length; i += 1) {
    const id = objectsInside[i]['id'];
    ids.push(id);
  }
  return ids;
};

const searchEmployee = (id, detail) => {
  const ids = getAllIds();
  const infoKeys = Object.keys(objectsInside[0]);
  if (!ids.includes(id)) return 'ID não identificada';
  if (!infoKeys.includes(detail)) return 'Informação indisponível';
  for (let i = 0; i < professionalBoard.length; i += 1) {
    const obj = JSON.stringify(objectsInside[i]);
    if (obj.includes(`${id}`) && detail !== 'specialities') return objectsInside[i][`${detail}`];
    if (obj.includes(`${id}`) && detail === 'specialities') return objectsInside[i][`${detail}`];
  }
};

module.exports = searchEmployee;
