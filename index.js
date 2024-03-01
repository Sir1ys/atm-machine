function recursion(amount, contentOfAtm) {
  if (amount === 0) return 1;

  const element = contentOfAtm.find((e) => amount >= e.value && e.quantity > 0);

  const elementToString = JSON.stringify({ ...element, quantity: 1 });

  if (element === undefined) return 0;

  element.quantity -= 1;

  return (
    elementToString + " " + recursion(amount - element.value, contentOfAtm)
  );
}

function makeAWithdraw(amount, contentOfAtm) {
  const copyOfContent = [...contentOfAtm];

  const resultOfRecursion = recursion(amount, copyOfContent)
    .split(" ")
    .map((e) => JSON.parse(e));

  if (resultOfRecursion.indexOf(0) !== -1)
    return "There is not enough money in ATM!";

  const copyOfTheResult = [];

  resultOfRecursion.forEach((el) => {
    const element = copyOfTheResult.find((i) => i.value === el.value);
    const indexOfElement = copyOfTheResult.indexOf(element);

    if (indexOfElement === -1) {
      copyOfTheResult.push(el);
    } else {
      copyOfTheResult[indexOfElement].quantity += 1;
    }
  });

  let string = "Your withdraw is";

  copyOfTheResult.forEach(({ value, type, quantity }, i) => {
    const lastObjectIndex = copyOfTheResult.length - 2;

    switch (true) {
      case i === 0:
        string += ` ${quantity} ${type} of ${value}`;
        break;
      case i > 0 && i < lastObjectIndex:
        string += `, ${quantity} ${type} of ${value}`;
        break;
      case i === lastObjectIndex:
        string += ` and ${quantity} ${type} of ${value}`;
        break;
      default:
        break;
    }
  });

  return string;
}

module.exports = makeAWithdraw;
