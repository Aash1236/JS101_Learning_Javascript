function customSubstring(str, start, end) {
  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }

  let result = "";
  for (let i = start; i < end && i < str.length; i++) {
    result += str[i];
  }

  return result;
}
const myString = "Mozilla";
const substringResult = customSubstring(myString, 2, 5);
console.log(substringResult); // Output: "zill"
