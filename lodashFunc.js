const chunk = function (arr, chunkSize = 1) {
  const res = [];
  let count = 0;
  if (!Array.isArray(arr)) {
    arr = arr.split('');
  }

  while (count < arr.length && chunkSize !== 0 && typeof chunkSize === 'number') {
    res.push(arr.slice(count, chunkSize + count));
    count += chunkSize;
  }

  return res;
};


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
      res.push(...i);
    } else {
      res.push(i);
    }
  }
  return res;
};

const flattenDeep = function (arr) {
  const res = [];
  for (const i of arr) {
    if (Array.isArray(i)) {
      const ans = flattenDeep(i);
      res.push(...ans);
    } else {
      res.push(i);
    }
  }
  return res;
};

const flattenDepth = function (arr, depth) {
  const res = [];
  for (const i of arr) {
    if (Array.isArray(i)) {
      if (depth > 1) {
        const ans = flattenDeepDepth(i, --depth);
        res.push(...ans);
      } else {
        for (const j of i) res.push(j);
      }
    } else {
      res.push(i);
    }
  }
  return res;
};

const zip = function () {
  let allArrays = Object.values(arguments);
  let totalArr = allArrays.length;
  let arrLength = allArrays[0].length;
  let count = 0;
  let finalArr = [];
  while (count < arrLength) {
    let arr = [];
    for (let i = 0; i < totalArr; i++) {
      let ele = allArrays[i];
      arr.push(ele[count]);
    }
    count++;
    finalArr.push(arr);
  }
  return finalArr;
  
}

const zipWith = function () {
  let func = arguments[arguments.length - 1];
  let allArrays = Object.values(arguments);
  if (typeof func !== 'function') {
    func = (a, b) => {
      return [a, b];
    }
    allArrays = allArrays.splice(0, allArrays.length);
  }
  else {
    allArrays = allArrays.splice(0, allArrays.length - 1);
  }
  let res = [];
  for (let i = 0; i < allArrays[0].length; i++) {
    let args = allArrays.map(e => e[i]);
    res.push(func(...args));
  }
  return res;
}

module.exports = {
  chunk,
  compact,
  zipWith,
  zip
}
