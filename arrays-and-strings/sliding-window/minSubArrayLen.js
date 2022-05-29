// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters -
// an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

// Time Complexity - O(n)
// Space Complexity - O(1)

//Variable Sliding Window Pattern

function minSubArrayLen(arr, num) {
  if (!arr.length) {
    return null;
  }

  let sum = 0;
  let left = 0;
  let minLen = Infinity;
  let right = 0;

  while (right < arr.length) {
    sum += arr[right];

    if (sum >= num) {
      //compressing window from the left
      while (sum >= num) {
        sum -= arr[left];
        left++;
      }
      minLen = Math.min(minLen, right - left + 2);
    }

    right++;
  }

  //If no element exists that's greater than given number return 0;
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 51, 33, 19], 520)); //0
