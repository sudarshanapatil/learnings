function test(testString) {
    let obj = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    let stack = [];
    if (!(testString.length % 2)) {  //check only if string length is even
        for (let i = 0; i < testString.length; i++) {
            if (testString[i] === "{" || testString[i] === "(" || testString[i] === "[")
                stack.push(testString[i]);
            else {
                if (testString[i] === obj[stack[stack.length - 1]])
                    stack.pop();
            }
        }
        if (stack.length === 0)
            console.log("corrrect parantheses");
        else
            console.log("incorrrect parantheses");
    }
    else
        console.log("incorrrect parantheses");
}
test("[]");
