let arr = ['cat', 'act', 'seen', 'nees', 'jhjh', 'jjh'];
let obj = {};
let res = [];

for (let i = 0; i < arr.length; i++) {
  let sortedWord = arr[i].split('').sort().join('');
  if (!obj[sortedWord]) {
    obj[sortedWord] = [arr[i]];
  }
  else {
    obj[sortedWord].push(arr[i]);
  }
}

for (let i in obj) {
  if (obj[i].length < 2) {
    delete obj[i];
  }
}
console.log(Object.values(obj));
