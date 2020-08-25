let a = [4, 4, 5, 2, 1, 0];

let total = 0, totalAsc = 0, totalDesc = 0, flow = 1;
const min = (a, b) => {
  return (a < b) ? a : b;
}

for (let i = 1; i < a.length; i++) {
  if (a[i] >= a[i - 1] && flow > 0) {
    totalAsc++;
  }
  else if (a[i] >= a[i - 1] && flow < 0) {
    flow = 1;
    total += min(totalAsc, totalDesc);
    totalAsc = 1;
    totalDesc = 0;
  }
  else if (a[i] < a[i - 1] && flow < 0) {
    totalDesc++;
  }
  else if (a[i] < a[i - 1] && flow > 0) {
    flow = -1;
    totalDesc++;
  }

}
total += min(totalAsc, totalDesc);

console.log("Total: ", total);