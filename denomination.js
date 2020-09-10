let notes = [2000, 500, 200, 100, 50, 10, 5, 2, 1];
let amount = 2000;
function denomination(notes, amount) {
  let totalNotes = 0;
  for (let i of notes) {
    if (amount >= i) {
      let currentNotes = parseInt(amount / i);
      totalNotes += currentNotes;
      amount = amount - (currentNotes * i);
      if (amount === 0)
        break;
    }
  }
  if (amount > 0)
    return -1;
  return totalNotes;
}
// console.log(denomination(notes, amount));
module.exports = { denomination };
