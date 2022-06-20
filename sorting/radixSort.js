//Only works for positive Integers
//Time Complexity : O(nk)
//Space Complexity : O(n+k)
function radixSort(numsArray) {
  let maxDigits = getMaxDigits(numsArray);
  for (let k = 0; k < maxDigits; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < numsArray.length; i++) {
      let index = getDigitAtPosition(numsArray[i], k);
      digitBuckets[index].push(numsArray[i]);
    }
    numsArray = [].concat(...digitBuckets);
  }

  return numsArray;
}

function getMaxDigits(numsArray) {
  let maxDigits = -Infinity;
  for (let i = 0; i < numsArray.length; i++) {
    let currentDigits = getDigitCount(numsArray[i]);
    maxDigits = Math.max(maxDigits, currentDigits);
  }

  return maxDigits;
}

function getDigitCount(num) {
  return Math.abs(num).toString().length;
}

function getDigitAtPosition(num, index) {
  return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

console.log(radixSort([1, 5, 2, 4, 3, 11, 7, 4, 55, 0]));
