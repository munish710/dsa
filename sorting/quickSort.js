//Time Complexity
//Best & Avg O(nlogn)
//Worst O(n^2);
//Space Complexity
//Best & Avg O(logn)
//Worst O(n);

function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let pivotIndex = pivotHelper(arr, start, end);
  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);
}

const testArr = [2, 4, 7, 1, 6, 11, 0, 99, -1, -5, 4000, 2];
console.log(quickSort(testArr, 0, testArr.length - 1));
console.log(testArr);

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//[4,8,2,1,9,0,6,3]
function pivotHelper(arr, start, end) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);

  return swapIndex;
}

// const arr = [4, 8, 2, 1, 9, 0, 6, 3];

// console.log(pivotHelper(arr, 0, arr.length - 1));
// console.log(arr);
