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
    res=arr.filter((item) => !(item%3))
    cb(res)
  },1000)
}

let arrFun = [fun1, fun2, fun3]

function series(arrFun,cb)
{
  let res=[]
  let arr=[2,4,3,6,9,5]
  
  function rec(arrFun,index){
    arrFun[index](arr,(data) => {
           res.push(data)
           console.log(res,"res",index)
           if(index===arrFun.length-1)
           cb(res)
           else 
           rec(arrFun,index+1)       

  })
  }
   rec(arrFun,0)   
 }
series(arrFun,(data) => {
   console.log("Final data",data)
})
