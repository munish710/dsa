// Frequency Counter - areThereDuplicates
// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions: Time Complexity - O(n), Space Complexity - O(n)

function areThereDuplicates(...args) {
  if (!args.length) {
    return false;
  }
  const lookUp = {};
  for (let i = 0; i < args.length; i++) {
    if (lookUp[args[i]]) {
      return true;
    }

    lookUp[args[i]] = 1;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates("a", "b", "c", "a")); // true
