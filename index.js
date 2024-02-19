const contentOfAtm = [
  { value: 500, type: "bill" },
  { value: 200, type: "bill" },
  { value: 100, type: "bill" },
  { value: 50, type: "bill" },
  { value: 20, type: "bill" },
  { value: 10, type: "bill" },
  { value: 5, type: "bill" },
  { value: 2, type: "coin" },
  { value: 1, type: "coin" },
];

function makeAWithdraw(amount) {
  return `Your withdraw is ${amount} coin of 1`;
}

module.exports = makeAWithdraw;
