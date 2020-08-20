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

Array.prototype.concat = function () {
  let res = [];
  for (let i of this) {
    (Object.prototype.toString.call(i) === "[object Array]") ? res.push(...i) : res.push(i);
  }
  return res;
};

console.log(arr.concat());
