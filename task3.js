//3.Task: Function Composition
//Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose
//These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

function square(number) {
  return number * number;
}

function double(number) {
  return number * 2;
}

function addFive(number) {
  return number + 5;
}

const compositeNumber = (number) => {
  const squareNumber = square(number);
  const doubleNumber = double(squareNumber);
  const finalResult = addFive(doubleNumber);
  return finalResult;
};
const num = 2;
const result = compositeNumber(num);
//console.log(result);
