// const sum = require("./sum");
// test("add 1 + 2 equals 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

test("2 + 2 is 4", () => {
  expect(2 + 2).toBe(4);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("null is falsy", () => {
  const n = 0;
  expect(n).toBeFalsy();
});

test("1 is truthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
});

const myFunction = require("./sum");

test("throws on invalid input", () => {
  expect(() => {
    myFunction("hah");
  }).toThrow();
});

const fetchData = require("./fetchData");
test("the data is i love food", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("i like food");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});

const fetchPromise = require("./fetchPromise");
test("the data is food", () => {
  return expect(fetchPromise()).resolves.toBe("food");
});

// test("the fetch fails with an error", () => {
//   return expect(fetchPromise()).reject.toThrow("error");
// });

test("data is food", async () => {
  const data = await fetchPromise();
  expect(data).toBe("food");
});

test("mock implementation of basic function", () => {
  const mock = jest.fn((x) => 42 + x);
  expect(mock(1)).toBe(43);
  expect(mock).toHaveBeenCalledWith(1);
});

test("spying on a method of an object ", () => {
  const video = {
    play() {
      return true;
    },
  };

  const spy = jest.spyOn(video, "play");
  video.play();

  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
