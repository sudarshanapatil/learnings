Array.prototype.chunk = function (n) {
  let res = [];
  let count = 0;
  while (count < this.length) {
    res.push(this.slice(count, n + count));
    count += n;
  }
  return res;
};

let arr = [2, 3, 7, 0, false, [3], [[3, 8]], 3];
let chunkSize = 3;
// console.log(arr.chunk(chunkSize));

Array.prototype.compact = function () {
  let res = [];
  res = this.filter((ele) => {
    return (ele !== false && ele !== null && ele !== 0 && ele !== "" && ele !== undefined && ele !== NaN)
  });
  return res;
};

// console.log(arr.compact());

const concat = function () {
  let res = [];
  for (let i of [...arguments]) {
    (Object.prototype.toString.call(i) === "[object Array]") ? res.push(...i) : res.push(i);
  }
  return res;
};

let arr1 = [2, 2, 3, 8, 's']
let arr2 = [5, 6, 's']
// console.log(concat(arr1, arr2, 6));

const difference = function () {
  let obj = arguments[0].reduce((res, ele) => {
    if (!res[ele])
      res[ele] = 1;
    else
      res[ele] = ++res[ele];
    return res;
  }, {});

  let res = [];
  for (let i of arguments[1]) {
    if (i in obj) {
      delete obj[i];
    }
  }
  for (let i in obj) {
    let count = 1;
    if (obj[i] > 1) {
      while (count <= obj[i]) {
        res.push(parseInt(i));
        count++
      }
    }
    else {
      res.push(parseInt(i));
    }
  }
  return res;
};

// console.log(difference(arr1, arr2));


const drop = function (arr, n = 1) {
  arr.splice(0, n);
  return arr;
}
console.log(drop(arr1, 0));

const dropRight = function (arr, n = 1) {
  arr.reverse().splice(0, n);
  return arr.reverse();
}
console.log(dropRight(arr1, 2));