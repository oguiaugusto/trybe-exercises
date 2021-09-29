const {
  decode,
  encode,
  techList,
  hydrate,
} = require('./playground-functions');

describe('Encode and Decode functions:', () => {
  it('Expect to be functions', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('Expect vowels [a, e, i, o, u] to be converted to [1, 2, 3, 4, 5]', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  it('Expect numbers [1, 2, 3, 4, 5] to be converted to [a, b, c, d, e]', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });
  it('Expect other letters and numbers not to be encoded or decoded', () => {
    expect(encode('aeiou bcd 12345 678')).toBe('12345 bcd 12345 678');
    expect(decode('aeiou bcd 12345 678')).toBe('aeiou bcd aeiou 678');
  });
  it('Expect returned length of string to be the same as given string', () => {
    const inputEString = 'Hello';
    const inputDString = 'H2ll4';
    const outputEString = encode(inputEString);
    const outputDString = decode(inputDString);
    expect(inputEString.length).toEqual(outputEString.length);
    expect(inputDString.length).toEqual(outputDString.length);
  });
});
