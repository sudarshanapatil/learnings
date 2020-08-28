const a = [2, 4, 5];
myMap = (array, func) => {
  const finalArr = [];
  for (const i in array) {
    const data = func(array[i]);
    finalArr.push(data);
  }
  return finalArr;
};
const changedArr = myMap(a, (key) => key * 2);
console.log(changedArr);
