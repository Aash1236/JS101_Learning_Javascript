function findSum(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

function calculateAverage(arr) {
  const sum = findSum(arr);
  const count = arr.length;

  return count === 0 ? 0 : sum / count;
}

const array1 = [5, 10, 15, 20];
const array2 = [];

const average1 = calculateAverage(array1);
const average2 = calculateAverage(array2);

console.log("Average of array1:", average1);
console.log("Average of array2:", average2);
