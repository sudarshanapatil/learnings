let a = [4, 6, 7, 90,0, 34, 56]
let myFilter = (array, func) => {
  let filterArr = []
  for (let i in array) {
    let data=func(array[i])
    if(data)
    filterArr.push(array[i])
  }
  return filterArr
}
let finalArr=myFilter(a,(data)=>{
   if(data>50)  
  return data
})

console.log(finalArr)
