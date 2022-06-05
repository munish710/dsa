//Time Complexity O(m *(n-m+1)) === O(n*m)
//Space Complexity O(1)

function naiveStringSearch(str, pattern) {
  let matchCount = 0;
  let n = str.length;
  let m = pattern.length;
  for (let i = 0; i <= n - m; i++) {
    for (let j = 0; j < m; j++) {
      if (str[i + j] !== pattern[j]) {
        break;
      }
      if (j === m - 1) {
        matchCount++;
      }
    }
  }

  return matchCount;
}

console.log(naiveStringSearch("lorie lol ooledlol", "lol"));
