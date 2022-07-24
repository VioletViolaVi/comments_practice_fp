const getLargestMethod = require("./practice");

describe("Example Tests (starters)", () => {
  test("Both numbers need to be same: ", () => {
    expect(5).toBe(5);
  });

  test("Both numbers need to be different: ", () => {
    expect(5).not.toBe(6);
  });
});

describe("Testing getLargest()", () => {
  test("Shows largest value: ", () => {
    const result = getLargestMethod(1, 2, 3);
    expect(result).toEqual(3);
  });
});
