let a = [2, 3, 4, 5, 2, 3, 3, 2]
let b = [3, 4, 5, 6]
let objA = {}
let objB = {}
let commonArr = []
myReduce = (array, reducer, iniValue) => {
    //complexity n
    let result = iniValue
    for (let i in array) {
        result = reducer(result, array[i])
    }
    return result
}
objA = myReduce(a, (result, item) => {
    if (!result[item])
        result[item] = 1
    else
        result[item] = ++result[item]
    return result;
}, {})

withReduce = () => {
    //complexity n
    objA = a.reduce((result, item) => {
        if (!result[item])
            result[item] = 1
        else
            result[item] = ++result[item]
        return result;
    }, {})
    objB = b.reduce((result, item) => {
        if (!result[item])
            result[item] = 1
        else
            result[item] = ++result[item]
        return result;
    }, {})
    let keysA = Object.keys(objA)
    for (let i in keysA) {
        if (keysA[i] in objB)
            commonArr.push(keysA[i])
    }
}
worstMethod = () => {
    //Complexity is n*m
    a.map(item => {
        b.map(bitem => {
            console.log(item, bitem, "test")
            if (item === bitem) {
                console.log(bitem, "ghghg")
                commonArr.push(bitem)
            }
            // return bitem;
        })
    })
}
