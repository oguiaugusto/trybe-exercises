const service = {
  randomNumber: () => Math.round(Math.random() * 100),
  screamingString: (string) => string.toUpperCase(),
  firstLetter: (string) => string[0],
  concatStrings: (string1, string2) => string1 + string2,
};

export default service;
