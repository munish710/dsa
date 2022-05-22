// capitalizeFirst
// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.
// You cannot use for loop

function capitalizeFirst(arr) {
  const resultArr = [];
  if (arr.length === 0) {
    return resultArr;
  }
  resultArr.push((arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1)));

  return resultArr.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
