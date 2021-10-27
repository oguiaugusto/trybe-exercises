const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const counting = names.reduce((acc, word) => {
    const splitting = word.toLowerCase().split('');
    splitting.forEach((letter) => (letter === 'a') ? acc += letter : acc);
    return acc;
  }, '');
  return counting.length;
}

console.log(containsA());