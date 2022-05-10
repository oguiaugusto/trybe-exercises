const shellQuestions = require('./conversionReadline');
const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'] as const;

type Units = typeof units[number];

function convert(value: number, baseUnit: Units, convertUnit: Units): number {
  const convertIndex: number = units.indexOf(convertUnit);
  const baseIndex: number = units.indexOf(baseUnit);
  const exponent = convertIndex - baseIndex;

  return value * Math.pow(10, exponent);
}

function main(): void {
  shellQuestions(units, convert);
}

main();

export {};
