const arr = [2, -3, -10];
let max = 0; let maxSoFar = 0; let maxStart = 0; let maxEnd = 0; let maxSoFarStart = 0; let
  maxSoFarEnd = 0;
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
console.log('max : ', max, 'start_index : ', maxStart, 'end_index : ',
  maxEnd);
