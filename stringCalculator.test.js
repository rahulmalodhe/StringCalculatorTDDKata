import add from "./stringCalculator";

test("should return 0 for an empty String", () => {
  expect(add("")).toBe(0);
});

test("should return the number itself for a single number", () => {
  expect(add("1")).toBe(1);
  expect(add("5")).toBe(5);
});

test("should return the sum of two numbers", () => {
  expect(add("1, 5")).toBe(6);
  expect(add("10, 0")).toBe(10);
});

test("should return the sum of n numbers", () => {
  expect(add("1,5,7,2,5")).toBe(20);
  expect(add("10,0,5,7,9,3,4")).toBe(38);
});

test("should return the sum of numbers with \n", () => {
  expect(add("1\n2,3")).toBe(6);
  expect(add("10\n20\n30")).toBe(60);
});

test("should support different delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//|\n10|20|30")).toBe(60);
});

test("should throw an exception for negative numbers", () => {
  expect(() => {
    add("1,-2,3");
  }).toThrow("negative numbers not allowed: -2");
  expect(() => {
    add("1,-2,-3,4");
  }).toThrow("negative numbers not allowed: -2,-3");
});

