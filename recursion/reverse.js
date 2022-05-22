// reverse
// Write a recursive function called reverse
// which accepts a string and returns a new string in reverse.

function reverse(str) {
  if (str.length === 1) {
    return str[0];
  }
  const lastElemIndex = str.length - 1;
  return str[lastElemIndex] + reverse(str.slice(0, lastElemIndex));
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
