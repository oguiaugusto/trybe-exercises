const shellQuestions = require('./conversionReadline');
const units = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'] as const;

type Units = typeof units[number];

function convert(value: number, baseUnit: Units, convertUnit: Units): number {
  const convertIndex: number = units.indexOf(convertUnit);
  const baseIndex: number = units.indexOf(baseUnit);
  const exponent = convertIndex - baseIndex;

  return value * Math.pow(1000, exponent);
}

function main(): void {
  shellQuestions(units, convert);
}

main();

export {};
