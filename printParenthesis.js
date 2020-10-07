let n = 3;

function printParenthesis(str, open, close) {
//   console.log(str, open, close,"call")
  if (open > close || open < 0) {
    return;    
  }
  else if(close === 0) {
    console.log(str);
  } else {
    printParenthesis(str+"(", open-1, close);
    printParenthesis(str+")", open, close-1);
  }
}

printParenthesis("", n, n);
