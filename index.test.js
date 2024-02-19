const makeAWithdraw = require("./index");

test("write correct output when you want to withdraw 1 coin", () => {
  expect(makeAWithdraw(1)).toBe("Your withdraw is 1 coin of 1");
});
