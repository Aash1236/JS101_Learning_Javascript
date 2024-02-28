function customIncludes(arr, searchElement, fromIndex) {
  for (let i = fromIndex; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      return true; // Return true if the element is found
    }
  }

  return false; // Return false if the element is not found in the array
}
const myArray = [1, 2, 3];
const searchElement = 2;
const includesResult = customIncludes(myArray, searchElement);
console.log(includesResult); // Output: true
