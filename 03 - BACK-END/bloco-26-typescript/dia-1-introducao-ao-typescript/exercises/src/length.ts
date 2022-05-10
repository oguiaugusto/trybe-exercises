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
  console.log(`1000km em metros: ${convert(1000, 'km', 'm')}m`);
  console.log(`250hm em decâmetros: ${convert(250, 'hm', 'dam')}dam`);
  console.log(`100cm em metros: ${convert(100, 'cm', 'm')}m`);
}

main();

export {};
