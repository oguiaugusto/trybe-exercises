// 4- Depois, faça uma pirâmide com n asteriscos de base:

const n = 5;
let commandLine;
for (let i = 1; i <= n; i += 1) {
  commandLine = "";
  if ((n - i) % 2 === 0 && (n - i) !== 0) {
    for (let secondI = 0; secondI < n; secondI += 1) {
      if (secondI < (n - i)) {
        for (secondIdotOne = 0; secondIdotOne < ((n - i) / 2); secondIdotOne += 1) {
          commandLine += " ";
        }
      }
      
      if (secondI < (n - i)) {
        for (secondIdotTwo = 0; secondIdotTwo < (n - (n - i)); secondIdotTwo += 1) {
          commandLine += "*";
        }
      }

      if (secondI < (n - i)) {
        for (secondIdotThree = 0; secondIdotThree < ((n - i) / 2); secondIdotThree += 1) {
          commandLine += " ";
        }
      }
      break;
    }
    console.log(commandLine);
  }
  else if (i === n) {
    for (let thirdI = 0; thirdI < n; thirdI += 1) {
      commandLine += "*"
    }
    console.log(commandLine)
  }
  else {
  }
}