function customSlice(arr, start, end) {
  start = start || 0;

  start = start >= 0 ? start : Math.max(arr.length + start, 0);
  end = end >= 0 ? end : Math.max(arr.length + end, 0);

  const result = [];
  for (let i = start; i < end && i < arr.length; i++) {
    result.push(arr[i]);
  }

  return result;
}
const myArray = ["ant", "bison", "camel", "duck", "elephant"];
const slicedArray = customSlice(myArray, 1, 4);
console.log(slicedArray);
