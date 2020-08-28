function fib(n) {
  const fibArr = [];
  if (fibArr[n] !== undefined) {
    return fibArr[n];
  }

  if (n === 0 || n === 1) {
    fibArr[n] = n;
    return n;
  }

  fibArr[n] = fib(n - 1) + fib(n - 2);
  return fibArr[n];
}

console.log(fib(9));
