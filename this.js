//Arrow Function
//In other words, 'this' inside the arrow function is not bound to our call object, 
// but instead is already bound to where the call object is being created originally, 
// which in this case is the global object
//And because the global object does not have a caller property, this.caller is undefined.

const call1 = {
    caller: "mom", 
    says: () => {
      console.log(`Hey, ${this.caller} just called.`);
    }
}
call1.says();

// As a general rule, 'this' is determined by the object invoking a function. 
// Therefore, when the call object invokes says function (call.says()), 
// the 'this' keyword inside the says function refers to the call object
const call2 = {
    caller: "mom", 
    says: function() {
      console.log(`Hey, ${this.caller} just called.`);
    }
};  
call2.says();

// Notice where we invoke the function. Is it inside the call object? 
// No. We are invoking newCall() function globally, 
// which in turn makes the 'this' keyword equal to the global object.
//Regular functions change their behaviors BASED ON the object that is CALLING the function.
const call3 = {
    caller: "mom", 
    says: function() {
      console.log(`Hey, ${this.caller} just called.`);
    }
};
  
let newCall = call3.says;
  
newCall();

function Person(fn, ln) {
	this.first_name = fn;
	this.last_name = ln;
	this.displayName = function() {
		console.log(`Name: ${this.first_name} ${this.last_name}`);
	}
}

let person = new Person("John", "Reed");
person.displayName();  // Prints Name: John Reed

let person2 = new Person("Paul", "Adams");
person2.displayName();  // Prints Name: Paul Admas
