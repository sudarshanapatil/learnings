

function test(testString) {
    let obj = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    let valid = true;
    if (!testString.length % 2) {  //check only if string length is even
        for (let i = 0; i <= testString.length / 2 - 1; i++) {
            let startIndex = testString.charAt(i);
            let lastIndex = testString.charAt(testString.length - 1 - i);
            if (obj[startIndex] !== lastIndex) {
                valid = false;
                break;
            }
        }
    }
    else  //if odd length invalid 
        valid = false;

    if (valid)
        console.log("corrrect paranthesis");
    else
        console.log("incorrrect paranthesis");
}
test("[{]");


