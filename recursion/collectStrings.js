// collectStrings
// Write a function called collectStrings which accepts an object and
// returns an array of all the values in the object that have a typeof string.

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

function collectStrings(obj) {
  let resultArr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "string") {
        resultArr.push(obj[key]);
      }
      if (typeof obj[key] === "object") {
        resultArr = resultArr.concat(collectStrings(obj[key]));
      }
    }
  }

  return resultArr;
}

console.log(collectStrings(obj)); // ['foo', 'bar', 'baz'])
