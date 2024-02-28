function isUpperCase(char) {
  return char === char.toUpperCase();
}

function swapCase(char) {
  return isUpperCase(char) ? char.toLowerCase() : char.toUpperCase();
}

function swapCaseOfString(str) {
  return str.split("").map(swapCase).join("");
}

const inputString = "Test";
const outputString = swapCaseOfString(inputString);

console.log("Sample Input:", inputString);
console.log("Sample Output:", outputString);
