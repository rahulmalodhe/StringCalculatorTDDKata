import add from "./stringCalculator";

test("should return 0 for an empty String", () => {
  expect(add("")).toBe(0);
});

test("should return the number itself for a single number", () => {
  expect(add("1")).toBe(1);
  expect(add("5")).toBe(5);
});

test("should return the sum of numbers if more than single Number", () => {
  expect(add("1, 5")).toBe(6);
  expect(add("10, 0")).toBe(10);
});
