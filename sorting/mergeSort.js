//Divide and Conquer Algorithm
//Time Complexity O(nlogn)
//Space Complexity O(n)
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

//Time Complexity O(n+m)
//Space Complexity O(n+m)
function merge(arr1, arr2) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// console.log(merge([1, 2, 3, 6, 8], [2, 7, 9, 10]));
// console.log(mergeSort([1, 4, 0, 3, 11, 99, 80]));

function mergeSort2(arr, left, right) {
  if (left >= right) {
    return;
  }
  let middle = Math.floor((left + right) / 2);
  mergeSort2(arr, left, middle);
  mergeSort2(arr, middle + 1, right);

  merge2(arr, left, middle, right);
}

function merge2(arr, left, middle, right) {
  let m = middle - left + 1;
  let n = right - middle;

  let leftArr = new Array(m);
  let rightArr = new Array(n);

  for (let i = 0; i < m; i++) {
    leftArr[i] = arr[left + i];
  }

  for (let j = 0; j < n; j++) {
    rightArr[j] = arr[middle + 1 + j];
  }

  let i = 0,
    j = 0,
    k = left;

  while (i < m && j < n) {
    if (leftArr[i] < rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < m) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < n) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}

const arr = [12, 11, 13, 5, 6, 7];
// merge2(arr, 0, 3, arr.length - 1);
mergeSort2(arr, 0, arr.length - 1);
console.log(arr);
