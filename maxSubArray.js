let arr = [2, -3, -10];
let max = 0, maxSoFar = 0, maxStart = 0, maxEnd = 0, maxSoFarStart = 0, maxSoFarEnd = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] + maxSoFar > 0) {
    maxSoFar += arr[i];
    maxSoFarEnd = i;
    if (max < maxSoFar) {
      max = maxSoFar;
      maxEnd = i;
      maxStart = maxSoFarStart;
    }
  } else {
    maxSoFar = 0;
    maxSoFarStart = i + 1;
  }
}
console.log("max : ", max, "start_index : ", maxStart, "end_index : ",
  maxEnd);
