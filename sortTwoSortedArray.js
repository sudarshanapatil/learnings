const sortArr = (a, b) => {
    let aSize = a.length;
    let bSize = b.length;
    let aIndex = 0;
    let bIndex = 0;
    let sortedArr = [];
    while (aIndex < aSize && bIndex < bSize) {   //For and while think
        if (a[aIndex] < b[bIndex]) {
            sortedArr.push(a[aIndex])
            aIndex++;
        }
        else {
            sortedArr.push(b[bIndex])
            bIndex++;
        }
    }    
    while (bIndex < bSize) {
        sortedArr.push(b[bIndex])
        bIndex++;
    }    
    while (aIndex < aSize){
        sortedArr.push(a[aIndex])
        aIndex++
    }
    return (sortedArr);
}
let a = [1,3];
let b = [2,4];
console.log(sortArr(a, b))
