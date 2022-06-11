//Knuth Morris String Search Algo
//Best applied when both the target and pattern have
//lot's of repetitive characters
//onionionspl
//onions
function kmpSearch(str, pattern) {
  if (!pattern.length) {
    return 0;
  }
  let n = str.length;
  let m = pattern.length;
  let lpsArr = calculateLPSArray(pattern, m);
  let i = 0;
  let j = 0;
  let firstFoundIndex = -1;
  while (i < n) {
    if (str[i] === pattern[j]) {
      i++;
      j++;
    } else {
      if (j !== 0) {
        j = lpsArr[j - 1];
      } else {
        i++;
      }
    }

    if (j === m) {
      firstFoundIndex = i - j;
    }
  }

  return firstFoundIndex;
}

//aabaaca
//0101201
//LPS array contains the length of Longest Prefix = Longest Suffix
//for each substr of pattern
//Time Complexity O(2m) Space O(m)
function calculateLPSArray(pattern, m) {
  let lpsArr = [];
  lpsArr[0] = 0;
  let lpsLen = 0;
  let i = 1;

  while (i < m) {
    if (pattern[lpsLen] === pattern[i]) {
      lpsArr[i] = lpsLen + 1;
      lpsLen++;
      i++;
    } else {
      if (lpsLen !== 0) {
        // why this?
        // because we want comparison to start from the elemnt after prefix
        // which luckily for us is lpsLen == Index of the next char after the prefix
        lpsLen = lpsArr[lpsLen - 1];
      } else {
        lpsArr[i] = 0;
        i++;
      }
    }
  }

  return lpsArr;
}

console.log(kmpSearch("onionionspl", "onions"));
console.log(kmpSearch("ABABDABACDABABCABAB", "ABABCABAB"));
