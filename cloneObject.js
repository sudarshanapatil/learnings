let obj = {
  name: {
    fname: "sudarshana",
    lname: "patil"
  },
  age: null,
  address: {
    state: {
      city: "panvel"
    }
  }
}
let res = {};

Object.prototype.deepClone = function () {
  let res = {};
  checkParent(this, res);
  function checkParent(obj, parentObj) {
    let keys = Object.keys(obj);
    for (let i of keys) {
      if (typeof obj[i] === 'object' && obj[i] !== null) {
        parentObj[i] = {};
        checkParent(obj[i], parentObj[i]);
      } else
        parentObj[i] = obj[i];
    }
  }
  return res;
}

Object.prototype.shallowClone = function () {
  let parentObj = {};
  let keys = Object.keys(this);
  for (let i of keys) {
    parentObj[i] = this[i];
  }
  return parentObj;
}

console.log(obj.deepClone());
obj.shallowClone().address.state.city = 'rasayani';
console.log(obj);
