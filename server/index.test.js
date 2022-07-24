describe("Example Tests", () => {
  test("Both numbers need to be same: ", () => {
    expect(5).toBe(5);
  });

  test("Both numbers need to be different: ", () => {
    expect(5).not.toBe(6);
  });
});
