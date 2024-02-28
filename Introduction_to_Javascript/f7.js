function customJoin(arr, separator) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Given element should be anarray");
  }

  separator = separator || ",";

  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) {
      result += separator;
    }
  }

  return result;
}
const myArray = ["Fire", "Air", "Water"];
const result = customJoin(myArray, "|");
console.log(result);
