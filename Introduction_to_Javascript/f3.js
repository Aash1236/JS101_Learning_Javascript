function isOdd(number) {
  return number % 2 !== 0;
}

function printOddNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (isOdd(i)) {
      console.log(i);
    }
  }
}

const limit = 15;
console.log("Odd numbers up to", limit, "are:");
printOddNumbers(limit);
