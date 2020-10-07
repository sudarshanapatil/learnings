let range = 20
for (let i = 2; i <= range; i++) {
    let prime = checkPrime(i);
    if(prime)
    console.log(prime);
}
function checkPrime(n) {
    let prime = true;
    for (let i = 2; i < n/2; i++) {
        if (n % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        return n;
    }
}