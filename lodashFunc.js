const chunk = function (n) {
  const res = [];
  let count = 0;
  while (count < this.length) {
    res.push(this.slice(count, n + count));
    count += n;
  }
  return res;
};

const arr = [2, 3, 7, 0, false, [3], [[3, 8]], 3];
const chunkSize = 3;
const arrObj = [{ name: 'sudu', active: true },
{ name: 'rani', active: false },
{ name: 'ranipatil', active: false }];
const arr1 = [3, 4, 3, 8, 's'];
const arr2 = [5, 6, 's'];

const compact = function () {
  let res = [];
  res = this.filter((ele) => (ele !== false && ele !== null && ele !== 0 && ele !== '' && ele !== undefined && ele !== NaN));
  return res;
};

const concat = function () {
  const res = [];
  for (const i of [...arguments]) {
    (Object.prototype.toString.call(i) === '[object Array]') ? res.push(...i) : res.push(i);
  }
  return res;
};

const difference = function () {
  const obj = arguments[0].reduce((res, ele) => {
    if (!res[ele]) res[ele] = 1;
    else res[ele] = ++res[ele];
    return res;
  }, {});

  const res = [];
  for (const i of arguments[1]) {
    if (i in obj) {
      delete obj[i];
    }
  }
  for (const i in obj) {
    let count = 1;
    if (obj[i] > 1) {
      while (count <= obj[i]) {
        res.push(parseInt(i));
        count++;
      }
    } else {
      res.push(parseInt(i));
    }
  }
  return res;
};

const drop = function (arr, n = 1) {
  arr.splice(0, n);
  return arr;
};

const dropRight = function (arr, n = 1) {
  arr.reverse().splice(0, n);
  return arr.reverse();
};

const fill = function (arr, element, start = 0, end = arr.length) {
  let count = start;
  while (count < end) {
    arr[count] = element;
    count++;
  }
  return arr;
};

const find = function (arr, func) {
  for (const i of arr) {
    if (Array.isArray(func)) {
      if (i[func[0]] === func[1]) {
        return i;
      }
    } else if (typeof func === 'object') {
      if (i.toString() === func.toString()) {
        return i;
      }
    } else if (typeof func === 'string' || typeof func === 'number') {
      if (typeof i === 'object') {
        if (i[func]) return i;
      } else if (i === func) {
        return i;
      }
    } else if (typeof func === 'function') {
      if (func(i)) {
        return i;
      }
    }
  }
};

const findIndex = function (arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(func)) {
      if (arr[i][func[0]] === func[1]) {
        return i;
      }
    } else if (typeof func === 'object') {
      if (arr[i].toString() === func.toString()) return i;
    } else if (typeof func === 'string' || typeof func === 'number') {
      if (typeof arr[i] === 'object') {
        if (arr[i][func]) return i;
      } else if (arr[i] === func) return i;
    } else if (typeof func === 'function') {
      if (func(arr[i])) {
        return i;
      }
    } else return -1;
  }
};

const join = function (arr, separator) {
  let str = '';
  for (const i of arr) {
    str += `${i}${separator}`;
  }
  return str;
};

const reverse = function (arr) {
  const ans = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    ans.push(arr[i]);
  }
  return ans;
};

const take = function (arr, n = 1) {
  return arr.slice(0, n);
};

const without = function (arr, values) {
  console.log(values);
  arr = new Set(arr);
  for (let i = 0; i < values.length; i++) {
    if (arr.has(values[i])) {
      arr.delete(values[i]);
    }
  }
  const res = [];
  for (const item of arr.values()) {
    res.push(item);
  }
  return res;
};

const uniq = function (arr) {
  arr = new Set(arr);
  const res = [];
  for (const item of arr.keys()) {
    res.push(item);
  }
  return res;
};

const flatten = function (arr) {
  const res = [];
  for (const i of arr) {
    if (Array.isArray(i)) {
      for (let j of i) {
        res.push(j);
      }
    }
    else {
      res.push(i);
    }
  }
  return res;
};

const flattenDeep = function (arr) {
  const res = [];
  for (const i of arr) {
    if (Array.isArray(i)) {
      let ans = flattenDeep(i);
      res.push(...ans);
    }
    else {
      res.push(i);
    }
  }
  return res;
};


const flattenDeepDepth = function (arr, depth = 2) {
  const res = [];
  var count = 1;
  for (const i of arr) {
    if (Array.isArray(i)) {
      while (count <= depth) {
        for (let j of i) {
          if (Array.isArray(j)){
            
          }
        }
        count++;
      }
      // for (let j of i) {
      //   res.push(j);
      // }
    }
    else {
      res.push(i);
    }
  }
  return res;
};
console.log(flattenDeepDepth([1, 2,
  [2,
    [3, 4,
      [8]
    ]
  ]
]));


