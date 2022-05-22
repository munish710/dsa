// isPalindrome
// Write a recursive function called isPalindrome which returns true
// if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

function isPalindrome(str) {
  const lastElemIndex = str.length - 1;
  if (!str.length) {
    return true;
  }

  if (str[lastElemIndex] !== str[0]) {
    return false;
  }

  return isPalindrome(str.slice(1, lastElemIndex));
}

console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
