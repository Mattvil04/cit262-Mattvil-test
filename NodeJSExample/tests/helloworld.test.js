const getname = require('../src/helloworld.js');
test('returns a greeting message with the provided name', () => {
  const firstName = "Matias"; 
  expect(getname(firstName)).toBe("Hello Matias");
});