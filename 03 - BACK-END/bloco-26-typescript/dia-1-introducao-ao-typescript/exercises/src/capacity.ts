const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'] as const;

type Units = typeof units[number];

function convert(value: number, baseUnit: Units, convertUnit: Units): number {
  const convertIndex: number = units.indexOf(convertUnit);
  const baseIndex: number = units.indexOf(baseUnit);
  const exponent = convertIndex - baseIndex;

  return value * Math.pow(10, exponent);
}

function main(): void {
  console.log(`1000l em mililitro: ${convert(1000, 'l', 'ml')}ml`);
  console.log(`2500l em quilolitro: ${convert(2500, 'l', 'kl')}kl`);
  console.log(`1kl em litro: ${convert(1, 'kl', 'l')}l`);
}

main();

export {};
