// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is
// an anagram of the first. An anagram is a word, phrase, or name formed
// by rearranging the letters of another, such as cinema, formed from iceman.
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookUp = {};
  for (let char of str1) {
    if (lookUp[char]) {
      lookUp[char] += 1;
    } else {
      lookUp[char] = 1;
    }
  }

  for (let char of str2) {
    if (lookUp[char]) {
      lookUp[char]--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("bangladesh", "bnglasdesh")); // false
