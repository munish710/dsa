//Time Complexity O(log(n))
//Space Complexity O(1)

//Iterative Approach
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((end + start) / 2);
    if (arr[middle] === val) {
      return middle;
    }
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 11, 25, 63], 63));
console.log(binarySearch([1, 2, 3, 11, 25, 63], 69));
console.log(binarySearch([1, 2, 3, 11, 25, 63], 1));

//Time Complexity O(log(n))
//Space Complexity O(log(n))

function binarySearchRecursive(arr, val, start, end) {
  let middle = Math.floor((end + start) / 2);
  if (start > end) {
    return -1;
  }
  if (arr[middle] === val) {
    return middle;
  }

  if (val < arr[middle]) {
    return binarySearchRecursive(arr, val, start, middle - 1);
  } else {
    return binarySearchRecursive(arr, val, middle + 1, end);
  }
}

console.log(binarySearchRecursive([1, 2, 3, 11, 25, 63], 63, 0, 5));
console.log(binarySearchRecursive([1, 2, 3, 11, 25, 63], 69, 0, 5));
console.log(binarySearchRecursive([1, 2, 3, 11, 25, 63], 1, 0, 5));
