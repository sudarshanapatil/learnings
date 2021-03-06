const obj = {
  name: {
    fname: 'sudarshana',
    lname: 'patil',
  },
  age: null,
  address: {
    state: { city: 'panvel' },
  },
};
const res = {};

Object.prototype.deepClone = function () {
  const res = {};
  checkParent(this, res);
  function checkParent(obj, parentObj) {
    const keys = Object.keys(obj);
    for (const i of keys) {
      if (typeof obj[i] === 'object' && obj[i] !== null) {
        parentObj[i] = {};
        checkParent(obj[i], parentObj[i]);
      } else parentObj[i] = obj[i];
    }
  }
  return res;
};

Object.prototype.shallowClone = function () {
  const parentObj = {};
  const keys = Object.keys(this);
  for (const i of keys) {
    parentObj[i] = this[i];
  }
  return parentObj;
};

console.log(obj.deepClone());
obj.shallowClone().address.state.city = 'rasayani';
console.log(obj);
