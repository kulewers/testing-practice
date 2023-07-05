const calculator = require("./calculator");

test("add", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("subtract", () => {
  expect(calculator.subtract(8, 4)).toBe(4);
});

test("divide", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("multiply", () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});
