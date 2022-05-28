// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N) Space: O(N)

function sameFrequency(num1, num2) {
  const num1Str = num1.toString();
  const num2Str = num2.toString();

  return validAnagram(num1Str, num2Str);
}

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

console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
