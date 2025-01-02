// NOTE "this" in NORMAL FUNCTION refers to current object and it is evaluated at the runtime and it is purely based on where it is being executed
// NOTE: "this" inside the ARROW FUNCTION refers to it's lexical surrounding scope and it is not like the regular function

/*
1. Here the function makeUser returns an object.

What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?
*/

// the result is error because the makeUser() with .ref is treated as property and not as a method. If ref is a method then it will have object context and with the "alert( user.ref.name );" this will give "JOHN"
// In strict mode "this" will be resulted as undefined



/*
2. Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
*/

let calculator = {
    a: 0,
    b: 0,
    read(){
        this.a = prompt("Enter the A value");
        this.b = prompt("Enter the A value");
    },
    sum(){
        return this.a+this.b
    },
    mul(){
        return this.a*this.b
    }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());


/*
3. There’s a ladder object that allows you to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
Now, if we need to make several calls in sequence, we can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
Modify the code of up, down, and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
Such an approach is widely used across JavaScript libraries.
*/
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; // NOTE:  Here we have to return "this" which return the object and that is necessary for chaining up further, if you called "this.step" then it will return a primitive value as 1 and right after showStep() we can't chain since showStep had written the primitive value
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};
ladder.up().up().down().showStep().down().showStep();