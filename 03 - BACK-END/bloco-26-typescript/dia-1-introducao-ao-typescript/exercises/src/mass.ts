const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'] as const;

type Units = typeof units[number];

function convert(value: number, baseUnit: Units, convertUnit: Units): number {
  const convertIndex: number = units.indexOf(convertUnit);
  const baseIndex: number = units.indexOf(baseUnit);
  const exponent = convertIndex - baseIndex;

  return value * Math.pow(10, exponent);
}

function main(): void {
  console.log(`1000g em miligramas: ${convert(1000, 'g', 'mg')}mg`);
  console.log(`2500g em quilogramas: ${convert(2500, 'g', 'kg')}kg`);
  console.log(`1kg em gramas: ${convert(1, 'kg', 'g')}g`);
}

main();

export {};
