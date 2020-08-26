let test = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  inner(func) {
    func()
  }
  outer() {
    console.log("outer", this);
    this.inner(() => {            //try with and without arrow function ..Arrow functions use the this value of the enclosing execution context.
      {
        console.log("inner", this);
      }
    })
  }

}
let t1 = new test(10, 20);
t1.outer();
