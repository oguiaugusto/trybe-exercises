const readlineSync = require('readline-sync');

function main(): void {
  const scripts: string[] = ['length', 'mass', 'capacity', 'area', 'volume'];

  const scriptIndex: number = readlineSync.keyInSelect(scripts, 'Select a script:');
  const script: string = scripts[scriptIndex];
  if (!script) process.exit();

  console.log('\n');
  require(`./src/${script}`);
}

main();

export {};
