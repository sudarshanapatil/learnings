const a = [4, 6, 7, 90, 0, 34, 56];
const myFilter = (array, func) => {
  const filterArr = [];
  for (const i in array) {
    const data = func(array[i]);
    if (data) filterArr.push(array[i]);
  }
  return filterArr;
};
const finalArr = myFilter(a, (data) => {
  if (data > 50) return data;
});

console.log(finalArr);
