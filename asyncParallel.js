function fun1 (arr, cb) {
  setTimeout(()=>{
    res=arr.reduce((acc,item) => acc+item)
    cb(res);
  },2000)
}

function fun2 (arr, cb) {
  setTimeout(()=>{
    res=arr.map((item) => item+1)
    cb(res);
  },3000)
}

function fun3 (arr,cb) {
  setTimeout(()=>{
    res=arr.filter((item) => item%3)
    cb(res)
  },1000)
}

let arrFun = [fun1, fun2, fun3]

parallel = (arrFun, cb) => {
  let arr=[2,4,3,6,9,5]
  let res=[]
  let processed=0
  for (let i in arrFun) {    
    arrFun[i](arr,(data) => {
      res[i]=data
      processed++
    })
  }

  let interval=setInterval(() => {
    if(processed===arrFun.length)
     {
       clearInterval(interval);
       cb(res)
    }
  }, 1000);  
}

parallel(arrFun, (res) => {
  console.log('all fun result', res)
  
})
