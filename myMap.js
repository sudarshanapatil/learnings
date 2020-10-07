const a = [2, 4, 5];
myMap = (array, func) => {
  const finalArr = [];
  for (const i in array) {
    finalArr.push(func(array[i]));
  }
  return finalArr;
};
const changedArr = myMap(a, (key) => key * 2);
console.log(changedArr);
