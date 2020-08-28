const arr = ['cat', 'act', 'seen', 'nees', 'jhjh', 'jjh'];
const obj = {};
const res = [];

for (let i = 0; i < arr.length; i++) {
  const sortedWord = arr[i].split('').sort().join('');
  if (!obj[sortedWord]) {
    obj[sortedWord] = [arr[i]];
  } else {
    obj[sortedWord].push(arr[i]);
  }
}

for (const i in obj) {
  if (obj[i].length < 2) {
    delete obj[i];
  }
}
console.log(Object.values(obj));
