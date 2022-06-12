//Time Complexity O(n^2)
//Space Complexity O(1)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentval = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > currentval) {
        //we could have swapped the value
        //everytime, till we find the right position
        //or just move it to the next position
        arr[j + 1] = arr[j];
      } else {
        //since the left array is already sorted
        break;
      }
    }
    arr[j + 1] = currentval;
  }

  return arr;
}

console.log(insertionSort([1, 2, 55, 3, 65, 998, 11, 333, -1]));

//When data is mostly sorted Complexity is O(n+d).
// where d is the number of inversions
// Plus if we don't have complete data, i.e data is streaming
// It is a good usecase for insertion sort
