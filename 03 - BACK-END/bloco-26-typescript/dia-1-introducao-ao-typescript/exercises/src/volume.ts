const units = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'] as const;

type Units = typeof units[number];

function convert(value: number, baseUnit: Units, convertUnit: Units): number {
  const convertIndex: number = units.indexOf(convertUnit);
  const baseIndex: number = units.indexOf(baseUnit);
  const exponent = convertIndex - baseIndex;

  return value * Math.pow(1000, exponent);
}

function main(): void {
  console.log(`1000m3 em milimetros ao cubo: ${convert(1000, 'm3', 'mm3')}mm3`);
  console.log(`2500m3 em quilometros ao cubo: ${convert(2500, 'm3', 'km3')}km3`);
  console.log(`1km3 em metros ao cubo: ${convert(1, 'km3', 'm3')}m3`);
}

main();

export {};
