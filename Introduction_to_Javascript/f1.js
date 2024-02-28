function addNumbers(num1, num2) {
  return num1 + num2;
}

const number1 = 5;
const number2 = 7;
const number3 = 10;

const sumOfThreeNumbers = addNumbers(addNumbers(number1, number2), number3);

console.log("Sum of three numbers:", sumOfThreeNumbers);
