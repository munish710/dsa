// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// Time Complexity - O(n)
// Space Complexity - O(1)

// Solution with two pointers

function countUniqueValues(arr) {
  if (!arr.length) {
    return 0;
  }

  let counter = 1;

  for (let i = 0, j = 1; j < arr.length; j++, i++) {
    if (arr[i] !== arr[j]) {
      counter++;
    }
  }

  return counter;
}

//[1,1,2,3,4,66,77]

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

//If unsorted I would have used a Set ;)
