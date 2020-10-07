const mat = [[1, 1, 1, 1, 0, 1, 1],
             [1, 1, 1, 1, 0, 1, 0],
             [1, 1, 1, 1, 1, 1, 1],
             [1, 1, 1, 1, 1, 1, 0]];

let rowsCount = mat.length;
let colCount = mat[0].length;
let rows = new Set();
let cols = new Set();

for (let i = 0; i < rowsCount; i++) {      //complexity O(m * n)
  for (let j = 0; j < colCount; j++) {
    if(mat[i][j] === 0){
      rows.add(i);
      cols.add(j);
    }   
  }
}

for(let i of rows){                       //complexity O(n * m)
  for(let j=0; j < colCount; j++){
    mat[i][j] = 0;
  }
}

for(let i of cols){                       //complexity O(n * m)
  for(let j=0; j < rowsCount; j++){
    mat[j][i] = 0;
  }
}

console.log(rows,cols,mat)
