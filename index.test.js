const makeAWithdraw = require("./index");

test("return correct output when you want to withdraw simple amount", () => {
  expect(makeAWithdraw(1)).toBe("Your withdraw is 1 coin of 1");
  expect(makeAWithdraw(2)).toBe("Your withdraw is 1 coin of 2");
  expect(makeAWithdraw(5)).toBe("Your withdraw is 1 bill of 5");
});

test("return correct output when you want to withdraw complex amount", () => {
  expect(makeAWithdraw(8)).toBe(
    "Your withdraw is 1 bill of 5, 1 coin of 2 and 1 coin of 1"
  );
  expect(makeAWithdraw(11)).toBe(
    "Your withdraw is 1 bill of 10 and 1 coin of 1"
  );
  expect(makeAWithdraw(13)).toBe(
    "Your withdraw is 1 bill of 10, 1 coin of 2 and 1 coin of 1"
  );
  expect(makeAWithdraw(52)).toBe(
    "Your withdraw is 1 bill of 50 and 1 coin of 2"
  );
});
