const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arrayOfArrays) {
  return arrayOfArrays.reduce((finalArray, currentArray) => finalArray.concat(currentArray));
}
console.log(flatten(arrays));