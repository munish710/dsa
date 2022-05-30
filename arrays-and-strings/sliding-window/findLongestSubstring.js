// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and
// returns the length of the longest substring with all distinct characters.

// Time Complexity - O(2N) eg. abcdefzz ->O(N) +O(N)
// Space Complexity - o(N)

function findLongestSubstring(str) {
  let left = 0;
  let right = 0;
  const charSet = new Set();
  let maxLength = -Infinity;

  while (right < str.length - 1) {
    if (charSet.has(str[right])) {
      charSet.delete(str[left]);
      left++;
    } else {
      maxLength = Math.max(maxLength, right - left + 1);
      charSet.add(str[right]);
      right++;
    }
  }

  return maxLength === -Infinity ? 0 : maxLength;
}

//abcaadbc

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
