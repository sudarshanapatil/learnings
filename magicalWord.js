function makeMagicalWord(array, n) {
  let prime = [67, 71];
  // let prime = array;
  let start = 0, end = prime.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (prime[mid] === n)
      return n;
    else if (prime[mid] < n) {    //Right subArray
      let d1 = Math.abs(prime[mid] - n);
      let d2 = Math.abs(prime[mid + 1] - n);
      if (d1 < d2 || d1 === d2) {
        return prime[mid]; 
      } else if (d1 > d2) {
        start = mid + 1;
      }
    } else {                       //Left SubArray
      if (mid - 1 >= 0) {
        let d1 = Math.abs(prime[mid] - n);
        let d2 = Math.abs(prime[mid - 1] - n);
        console.log(d1, d2, "d", mid, start, end)
        if (d1 < d2) {
          return prime[mid];
        } else if (d1 > d2) {
          end = mid - 1;
        } else {
          return prime[mid - 1];
        }
      }else{
        return prime[mid]
      }
    }
  }
  return prime[start];
}

let arr = [9, 11, 15, 17];

console.log(makeMagicalWord(arr, 80));
module.exports = { makeMagicalWord };
