const data = [0, 3, 2, 6, 5, 8, 1, 9, 7, 10];
const otherArr = [...data];
const sum = 9;
let check;

function findIndexWithSum(data, sum) {
  for (const i of data) {
    if (i < sum) {
      check = sum - i;
    } else if (i === sum) {
      check = sum;
    }
    if (data.includes(check)) {
      const removeIndex = data.indexOf(check);
      console.log(otherArr.indexOf(i), otherArr.indexOf(check));
      data.splice(removeIndex, 1);
    }
  }
}

findIndexWithSum(data, sum);
