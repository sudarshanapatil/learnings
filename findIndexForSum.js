let data = [2, 8, 5,-2,2];
let sum = 10;
let hash = {};

function findIndexWithSum(data, sum) {
  for (let i = 0; i < data.length; i++) {
    if (hash[data[i]]) {
      firstIndex = hash[data[i]];
      lastIndex = i;
      console.log("Index", firstIndex, lastIndex);
    }
    balance = sum - data[i];
    hash[balance] = i.toString();
  }
}

findIndexWithSum(data, sum)
console.log("hash", hash)
