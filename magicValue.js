let arr = [2, 2, 5, 7, 8, 1, 0];
let G = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {

    } else {
        G.push(i);
    }
}
 console.log(G)
let max = 0;
for (let i of G) {
    if (largestPrime(i) > max)
        max = largestPrime(i)
}
console.log(max)

function largestPrime(num) {
    let n = 2;
    while (n <= num) {
        if (num % n === 0) {
            num = num / 2;
        } else {
            n++;
        }
    }
    return n;
}

// let arr1 = [1, 0, 1, 0, 0, 0, 0, 1,0];
// let s = 3;
// let c = 0;
// for (let i = 0; i < arr1.length; i++) {
//     sum = 0;
//     for (let j = i; j < arr1.length; j++) {
//         sum += arr1[j];
//         if (sum === s) {
//             console.log(sum, s,i,j)
//             c++;
//         }
//     }
// }
// console.log(c)
