const firstArr = [10, -10, 10, -10, 10];
const secondArr = [0, 0, 0, 0, 0];
const thirdArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function newMass(arr) {
  const resultArray = [];
  arr.reduce((previousSum, currentNumber) => {
    const value = previousSum + currentNumber;
    resultArray.push(value);
    return value;
  }, 0);
  return resultArray;
}

console.log(newMass(firstArr));
console.log(newMass(secondArr));
console.log(newMass(thirdArr));
