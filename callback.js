function fun1(arr, cb) {
  filterArr = arr.filter((data) => (data % 2 === 0));
  cb(filterArr);
}

function fun2(arr, cb) {
  sum = arr.map(((item) => item + 1));
  cb(sum);
}
const arr = [0, 2, 4, 3, 5];
function demo(arr) {
  fun1(arr, (evenArr) => {
    fun2(evenArr, (res) => { console.log(res); });
  });

  fun2(arr, (filterArr) => {
    fun1(filterArr, (res) => { console.log(res); });
  });
}

demo(arr);
