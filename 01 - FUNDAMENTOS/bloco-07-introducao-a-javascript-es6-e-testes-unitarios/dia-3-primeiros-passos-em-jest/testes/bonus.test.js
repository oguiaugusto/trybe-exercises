const searchEmployee = require('../bonus');

describe('searchEmployee() Function:', () => {
  it("Expect to return employee's info", () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
    expect(searchEmployee('4456-4', 'specialities')).toStrictEqual(['Context API', 'RTL', 'Bootstrap']);
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
    expect(searchEmployee('9852-2-2', 'lastName')).toBe('Cook');
    expect(searchEmployee('4678-2', 'specialities')).toStrictEqual(['Backend']);
  });
  it('Expect to return unindentified id', () => {
    expect(searchEmployee('1234-5', 'firstName')).toBe('ID não identificada');
    expect(searchEmployee('5861-51', 'lastName')).toBe('ID não identificada');
    expect(searchEmployee('6804987', 'specialities')).toBe('ID não identificada');
  });
  it('Expect to return unavailable information', () => {
    expect(searchEmployee('8579-6', 'startDate')).toBe('Informação indisponível');
    expect(searchEmployee('1256-4', 'salary')).toBe('Informação indisponível');
    expect(searchEmployee('4456-4', 'favoriteColor')).toBe('Informação indisponível');
  })
});
