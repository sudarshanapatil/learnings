let stack = [];

Array.prototype.push=()=>{
    console.log(this)
}
// function pushStack(ele) {
//     stack.push(ele);
//     return stack;
// }
function popStack() {
    return stack.pop();
}

function findSize(arr) {
    return arr.length;
}

stack.push(20)
console.log(pushStack(10));
console.log(pushStack(20));
console.log(pushStack(40));

console.log(popStack(),"poped");
console.log(findSize(stack),"length");



