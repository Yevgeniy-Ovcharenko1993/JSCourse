function toPow(num) {
  return num * num;
}

function createArrayWithSteps(step, size) {
  const arr = [];
  let i = 0;
  while (i < size) {
    arr.push((i += step));
  }
  return arr;
}

const thirdArr = [0, 4, 8, 12, 16, 20, 24, 28, 32];
const allElemToPow = thirdArr.map(x => x * 2);
const massive = allElemToPow.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`Sum of array ${massive}`);
console.log(`All elements of array to pow ${allElemToPow}`);
console.log(`Creating an array with steps ${createArrayWithSteps(5, 50)}`);
console.log(`Creating array with steps ${createArrayWithSteps(4, 40)}`);
console.log(`Number to pow ${toPow(5)}`);
