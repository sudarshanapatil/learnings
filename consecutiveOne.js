const find = (a) => {
  let count = 0;
  let maxCount = 0;
  for (const i in a) {
    if (a[i] === 1) {
      count++;
    } else {
      maxCount = maxCount > count ? maxCount : count; // depending on number of 0 are greater or number of 1 are greater put this condition in if or else
      count = 0;
    }
  }
  maxCount = maxCount > count ? maxCount : count;
  return (maxCount);
};
const a = [1, 0, 1, 1];
console.log(find(a));
