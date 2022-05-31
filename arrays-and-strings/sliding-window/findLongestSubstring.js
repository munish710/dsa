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
console.log(findLongestSubstring("bbbbbb")); // 1

//There's a slightly btter approach using Maps to keep the frequency
// and jump left pointer to the latest index

//thisisawesome

//Time COmplexity O(N)
// Spcae O(N) or O(256)===O(1)

function findLongestSubstringV2(str) {
  let left = 0;
  let right = 0;
  let charMap = new Map();
  let maxLength = -Infinity;
  while (right < str.length - 1) {
    if (charMap.has(str[right])) {
      //basically the character exists in the charMap, but its
      // index is lower than the current substr left
      // left = Math.max(charMap[str[right]] + 1, left);
      if (left <= charMap.get(str[right])) {
        left = charMap.get(str[right]) + 1;
      }
    }
    charMap.set(str[right], right);

    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength === -Infinity ? 0 : maxLength;
}

console.log(findLongestSubstringV2("")); // 0
console.log(findLongestSubstringV2("rithmschool")); // 7
console.log(findLongestSubstringV2("thisisawesome")); // 6
console.log(findLongestSubstringV2("bbbbbb")); // 1

// Two observations
// I used JS Object as Map and was checking existense as charMap[str[right]]
// Here I would not go into if for Index = 0;
// When I am checking if left < value of index, also check if index<=left
// We need to shift index in that case.
