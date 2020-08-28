const sortArr = (a, b) => {
  const aSize = a.length;
  const bSize = b.length;
  let aIndex = 0;
  let bIndex = 0;
  const sortedArr = [];
  while (aIndex < aSize && bIndex < bSize) { // For and while think
    if (a[aIndex] < b[bIndex]) {
      sortedArr.push(a[aIndex]);
      aIndex++;
    } else {
      sortedArr.push(b[bIndex]);
      bIndex++;
    }
  }
  while (bIndex < bSize) {
    sortedArr.push(b[bIndex]);
    bIndex++;
  }
  while (aIndex < aSize) {
    sortedArr.push(a[aIndex]);
    aIndex++;
  }
  return (sortedArr);
};
const a = [1, 3];
const b = [2, 4];
console.log(sortArr(a, b));
