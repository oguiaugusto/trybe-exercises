const shellQuestions = require('./conversionReadline');
const units = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'] as const;

type Units = typeof units[number];

function convert(value: number, baseUnit: Units, convertUnit: Units): number {
  const convertIndex: number = units.indexOf(convertUnit);
  const baseIndex: number = units.indexOf(baseUnit);
  const exponent = convertIndex - baseIndex;

  return value * Math.pow(100, exponent);
}

function main(): void {
  shellQuestions(units, convert);
}

main();

export {};
