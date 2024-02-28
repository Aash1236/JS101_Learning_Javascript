function findDifference(num1, num2) {
  return num1 - num2;
}

function findAbsoluteValue(num) {
  return Math.abs(num);
}

const input1Num1 = 12;
const input1Num2 = 4;
const diff1 = findDifference(input1Num1, input1Num2);
const absoluteDiff1 = findAbsoluteValue(diff1);

console.log("Sample Output-1:", absoluteDiff1);

const input2Num1 = 4;
const input2Num2 = 18;
const diff2 = findDifference(input2Num1, input2Num2);
const absoluteDiff2 = findAbsoluteValue(diff2);

console.log("Sample Output-2:", absoluteDiff2);
