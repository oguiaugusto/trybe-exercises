const shellQuestions = require('./conversionReadline');
const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'] as const;

type Units = typeof units[number];

function convert(value: number, baseUnit: Units, conversionUnit: Units): number {
  const conversionIndex: number = units.indexOf(conversionUnit);
  const baseIndex: number = units.indexOf(baseUnit);
  const exponent: number = conversionIndex - baseIndex;

  return value * Math.pow(10, exponent);
};
// solução retirada do gabarito

function main(): void {
  shellQuestions(units, convert);
}

main();

export {};
