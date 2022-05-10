const readlineSync = require('readline-sync');

module.exports = (units: string[], convertFunction: Function): void => {
  const value: number = readlineSync.questionFloat('What value you want to convert? ');
  if (!value) process.exit();

  const initialIndex: number = readlineSync.keyInSelect(units, 'What is the initial unit?');
  const initialUnit: string = units[initialIndex];
  if (!initialUnit) process.exit();

  const conversionIndex: number = readlineSync.keyInSelect(units, 'What is the conversion unit?');
  const conversionUnit: string = units[conversionIndex];
  if (!conversionUnit) process.exit();

  const convertedValue: number = convertFunction(value, initialUnit, conversionUnit);

  console.log(`${value + initialUnit} is equal to ${convertedValue + conversionUnit}.`);
}