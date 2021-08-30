// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

const n = 7;
let commandLine;

if (n % 2 !== 0) {
  for (let i = 1; i <= n; i += 1) {
    commandLine = "";
    if ((n - i) % 2 === 0 && (n - i) !== 0) {
      for (let secondI = 0; secondI < n; secondI += 1) {
        if (secondI < (n - i)) {
          for (let blankI = 0; blankI < ((n - i) / 2); blankI += 1) {
            commandLine += " ";
          }
          for (let starI = 0; starI < 1; starI += 1) {
            commandLine += "*";
          }
          for (let blankI = 0; blankI < (i - 2); blankI += 1) {
            commandLine += " ";
          }
          for (let starI = 0; starI < 1 && i > 1; starI += 1) {
            commandLine += "*";
          }
          for (let blankI = 0; blankI < ((n - i) / 2); blankI += 1) {
            commandLine += " ";
          }
        }
        break;
      }
      console.log(commandLine)
    }
    else if (i === n) {
      for (let thirdI = 0; thirdI < n; thirdI += 1) {
        commandLine += "*";
      }
      console.log(commandLine)
    }
    else {
    }
  }
}
else {
  console.log("Seu número precisa ser ímpar")
}