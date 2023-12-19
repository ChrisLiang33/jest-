const sum = require("./sum");
test("add 1 + 2 equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("2 + 2 is 4", () => {
  expect(2 + 2).toBe(4);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("null is falsy", () => {
  const n = null;
  expect(n).toBeFalsy();
});
