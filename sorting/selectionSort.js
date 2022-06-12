//Find the min value in one pass and place it at the first index
//Keep on repeating; sorta like bubble sort, without swapping every time

//Time Complexity O(n^2)
//Space Complexity O(1)
function selectionSort(arr) {
  let minIndex;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    //Extra check to prevent unnecessary swaps;
    if (minIndex !== i) {
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([1, 2, 55, 3, 65, 998, 11, 333, -1]));
