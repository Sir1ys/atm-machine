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

function recursion(amount) {
  const element = contentOfAtm.find((e) => amount >= e.value);

  if (amount === 0) return 0;

  return JSON.stringify(element) + " " + recursion(amount - element.value);
}

function makeAWithdraw(amount) {
  const resultOfRecursion = recursion(amount).split(" ");
  let string = "Your withdraw is";

  resultOfRecursion.forEach((e, i) => {
    const lastObjectIndex = resultOfRecursion.length - 2;
    const { value, type } = JSON.parse(e);

    switch (true) {
      case i === 0:
        string += ` 1 ${type} of ${value}`;
        break;
      case i > 0 && i < lastObjectIndex:
        string += `, 1 ${type} of ${value}`;
        break;
      case i === lastObjectIndex:
        string += ` and 1 ${type} of ${value}`;
        break;
      default:
        break;
    }
  });

  return string;
}

module.exports = makeAWithdraw;
