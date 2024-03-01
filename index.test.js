const makeAWithdraw = require("./index");

const contentOfAtm = [
  { value: 500, type: "bill", quantity: 3 },
  { value: 200, type: "bill", quantity: 6 },
  { value: 100, type: "bill", quantity: 14 },
  { value: 50, type: "bill", quantity: 2 },
  { value: 20, type: "bill", quantity: 23 },
  { value: 10, type: "bill", quantity: 54 },
  { value: 5, type: "bill", quantity: 76 },
  { value: 2, type: "coin", quantity: 120 },
  { value: 1, type: "coin", quantity: 323 },
];

let updatedContent = [];

beforeEach(() => {
  updatedContent = [...contentOfAtm];
});

afterEach(() => jest.clearAllMocks());

describe("makeAWithdraw", () => {
  test("return correct output when you want to withdraw simple amount", () => {
    expect(makeAWithdraw(1, updatedContent)).toBe(
      "Your withdraw is 1 coin of 1"
    );
    expect(makeAWithdraw(2, updatedContent)).toBe(
      "Your withdraw is 1 coin of 2"
    );
    expect(makeAWithdraw(5, updatedContent)).toBe(
      "Your withdraw is 1 bill of 5"
    );
  });

  test("return correct output when you want to withdraw complex amount", () => {
    expect(makeAWithdraw(8, updatedContent)).toBe(
      "Your withdraw is 1 bill of 5, 1 coin of 2 and 1 coin of 1"
    );
    expect(makeAWithdraw(11, updatedContent)).toBe(
      "Your withdraw is 1 bill of 10 and 1 coin of 1"
    );
    expect(makeAWithdraw(13, updatedContent)).toBe(
      "Your withdraw is 1 bill of 10, 1 coin of 2 and 1 coin of 1"
    );
    expect(makeAWithdraw(52, updatedContent)).toBe(
      "Your withdraw is 1 bill of 50 and 1 coin of 2"
    );
  });

  test("return correct output when you want to withdraw complex amount which is more than all of the values altogether", () => {
    expect(makeAWithdraw(1200, updatedContent)).toBe(
      "Your withdraw is 2 bill of 500 and 1 bill of 200"
    );
  });
});
