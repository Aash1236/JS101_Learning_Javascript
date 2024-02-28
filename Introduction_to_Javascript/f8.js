function customLastIndexOf(arr, searchElement, fromIndex) {
  fromIndex =
    fromIndex === undefined || fromIndex >= arr.length
      ? arr.length - 1
      : fromIndex;

  for (let i = fromIndex; i >= 0; i--) {
    if (arr[i] === searchElement) {
      return i; // Return the index if the element is found
    }
  }

  return -1; // Return -1 if the element is not found in the array
}

const myArray = ["Dodo", "Tiger", "Penguin", "Dodo"];
const searchElement = "Dodo";
const lastIndex = customLastIndexOf(myArray, searchElement);
console.log(lastIndex);
