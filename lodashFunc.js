const chunk = function (n) {
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
let arrObj = [{ name: "sudu", active: true },
{ name: "rani", active: false },
{ name: "ranipatil", active: false }];
let arr1 = [3, 4, 3, 8, 's'];
let arr2 = [5, 6, 's'];

const compact = function () {
  let res = [];
  res = this.filter((ele) => {
    return (ele !== false && ele !== null && ele !== 0 && ele !== "" && ele !== undefined && ele !== NaN)
  });
  return res;
};

const concat = function () {
  let res = [];
  for (let i of [...arguments]) {
    (Object.prototype.toString.call(i) === "[object Array]") ? res.push(...i) : res.push(i);
  }
  return res;
};

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

const drop = function (arr, n = 1) {
  arr.splice(0, n);
  return arr;
}

const dropRight = function (arr, n = 1) {
  arr.reverse().splice(0, n);
  return arr.reverse();
}

const fill = function (arr, element, start = 0, end = arr.length) {
  let count = start;
  while (count < end) {
    arr[count] = element;
    count++;
  }
  return arr;
}

const find = function (arr, func) {
  for (let i of arr) {
    if (Array.isArray(func)) {
      if (i[func[0]] === func[1]) {
        return i;
      }
    }
    else if (typeof func === 'object') {
      if (i.toString() === func.toString()) {
        return i;
      }
    } else if (typeof func === 'string' || typeof func === 'number') {
      if (typeof i === 'object') {
        if (i[func])
          return i;
      }
      else {
        if (i === func) {
          return i;
        }
      }
    } else if (typeof func === 'function') {
      if (func(i)) {
        return i;
      }
    }
  }
}

const findIndex = function (arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(func)) {
      if (arr[i][func[0]] === func[1]) {
        return i;
      }
    }
    else if (typeof func === 'object') {
      if (arr[i].toString() === func.toString())
        return i;
    } else if (typeof func === 'string' || typeof func === 'number') {
      if (typeof arr[i] === 'object') {
        if (arr[i][func])
          return i;
      }
      else {
        if (arr[i] === func)
          return i;
      }
    } else if (typeof func === 'function') {
      if (func(arr[i])) {
        return i;
      }
    }
    else return -1;
  }
}

const join = function (arr, separator) {
  let str = '';
  for (let i of arr) {
    str += `${i}${separator}`
  }
  return str;
}

const reverse = function (arr) {
  let ans = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    ans.push(arr[i]);
  }
  return ans;
}

const take = function (arr, n = 1) {
  return arr.slice(0, n);
}

const without = function (arr, values) {
  console.log(values)
  arr = new Set(arr);
  for (let i = 0; i < values.length; i++) {
    if (arr.has(values[i])) {
      arr.delete(values[i]);
    }
  }
  let res = [];
  for (let item of arr.values()) {
    res.push(item);
  }
  return res;
}
// console.log(without([1, 2, 2, 2, 4, 5], 2,3,4))

const uniq = function (arr) {
  arr = new Set(arr);
  let res = [];
  for (let item of arr.keys()) {
    res.push(item);
  }
  return res;
}
console.log(uniq([1, 2, 2, 2, 4, 5]))
