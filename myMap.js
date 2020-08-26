let a = [2, 4, 5]
myMap = (array, func) => {
  let finalArr = []
  for (let i in array) {
    let data = func(array[i])
    finalArr.push(data)
  }
  return finalArr;
}
let changedArr=myMap(a, key => {
  return key * 2
})
console.log(changedArr)
