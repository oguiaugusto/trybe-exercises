const units = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'] as const;

type Units = typeof units[number];

function convert(value: number, baseUnit: Units, convertUnit: Units): number {
  const convertIndex: number = units.indexOf(convertUnit);
  const baseIndex: number = units.indexOf(baseUnit);
  const exponent = convertIndex - baseIndex;

  return value * Math.pow(100, exponent);
}

function main(): void {
  console.log(`1000m2 em milimetros quadrados: ${convert(1000, 'm2', 'mm2')}mm2`);
  console.log(`2500m2 em quilometros quadrados: ${convert(2500, 'm2', 'km2')}km2`);
  console.log(`1km2 em metros quadrados: ${convert(1, 'km2', 'm2')}m2`);
}

main();

export {};
