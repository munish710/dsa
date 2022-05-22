// productOfArray
// Write a function called productOfArray which takes in an array of numbers
// and returns the product of them all.

function productOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const lastElemIndex = arr.length - 1;
  return arr[lastElemIndex] * productOfArray(arr.slice(0, lastElemIndex));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

//Takaway
//When using array inbuilt methods, alwasy know the rturn values, like arr.splice() modifies array in place but returns deleted element array.
//If you have the option to have 2 params array and array length, modify the length instead of array
