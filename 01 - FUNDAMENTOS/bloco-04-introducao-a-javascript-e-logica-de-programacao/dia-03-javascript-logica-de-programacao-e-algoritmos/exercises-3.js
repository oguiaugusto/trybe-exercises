// 3- Agora inverta o lado do triângulo.

const n = 5;
let commandLine;
for (let i = 1; i <= n; i += 1) {
  commandLine = ""
  for (let secondI = 0; secondI < n; secondI += 1) {
    if (secondI < (n - i)) {
      commandLine += " ";
    }
    else {
      commandLine += "*";
    }
  }
  console.log(commandLine);
}