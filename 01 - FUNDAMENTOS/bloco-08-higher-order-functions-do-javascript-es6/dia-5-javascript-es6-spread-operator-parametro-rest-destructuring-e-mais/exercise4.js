const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
const filterPeople = (peopleList) => {
  const bornInAustralia = peopleList
    .filter((person) => {
      const { nationality, bornIn: birth } = person;
      return (nationality === 'Australian' && birth < 2001) ? true : false;
    })
    .map((person) => person.name);
  if (bornInAustralia.length === 1) return `${bornInAustralia[0]} nasceu na Austrália.`;
  return bornInAustralia.reduce((acc, person) => (person === bornInAustralia[bornInAustralia.length - 1]) ? `${acc} e ${person} nasceram na Austrália.` : `${acc}, ${person}`);
};
console.log(filterPeople(people));
