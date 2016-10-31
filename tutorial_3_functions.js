/////////////////////
//Functions
//01/////////////////
function square(number) {
  return number * number;
}
//01/////////////////
function valF(d){
  d = 10;
}

var x = 5;
valF(x);
console.log(x)
//Primitive pass by value not changed
//02/////////////////
function valF(d){
  d = 10;
}
var x = 5;
valF(x);
console.log(x) // prints 5
//03/////////////////
function myFunc(theObject) {
  theObject.make = "Toyota";
}

var mycar = {make: "Honda", model: "Accord", year: 1998};
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // Toyota// y gets the value "Toyota"
                // (the make property was changed by the function)
//04/////////////////
var myFunc, num = 1;
if (num === 0){
  myFunc = function(theObject) {
    theObject.make = "Toyota"
  }
}
//05/////////////////
console.log(square(5));
/* ... */
function square(n) { return n * n }
//06/////////////////
console.log(square); // square is hoisted with an initial value undefined.
console.log(square(5)); // TypeError: square is not a function
var square = function (n) { 
  return n * n; 
}
//07/////////////////
// The following variables are defined in the global scope
var num1 = 20,
    num2 = 3,
    name = "Chamahk";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore () {
  var num1 = 2,
      num2 = 3;
  
  function add() {
    return name + " scored " + (num1 + num2);
  }
  
  return add();
}

getScore(); // Returns "Chamahk scored 5"
//08/////////////////
var x = 0;
var foo = function bar() {
  if(x === 5) return;
  x ++;
  console.log(x); //prints 1 - 5
  arguments.callee();   
};
//09/////////////////
function loop(x) {
  if (x >= 10) // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    return;
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
// Function like a stack
//10/////////////////
function foo(i) {
  if (i < 0)
    return;
  console.log('begin:' + i);
  foo(i - 1);
  console.log('end:' + i);
}
foo(3); //out
// begin:3
// begin:2
// begin:1
// begin:0
// end:0
// end:1
// end:2
// end:3
//11/////////////////
function addSquares(a,b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2,3); // returns 13
b = addSquares(3,4); // returns 25
c = addSquares(4,5); // returns 41
//Calling function inside
//12/////////////////
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
result = fn_inside(5); // returns 8
result1 = outside(3)(5); // returns 8
//12/////////////////
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3) // first call A()then B() then C();
//13/////////////////
function outside() {
  var x = 10;
  function inside(x) {
    return x;
  }
  return inside;
}
result = outside()(20); // returns 20 instead of 10. inner takes the precedence
//14/////////////////
var pet = function(name) {   // The outer function defines a variable called "name"
  var getName = function() {
    return name;             // The inner function has access to the "name" variable of the outer function
  }
  return getName;            // Return the inner function, thereby exposing it to outer scopes
},
myPet = pet("Vivie");
myPet();                     // Returns "Vivie"
//15/////////////////
var createPet = function(name) {
  var sex;
  
  return {
    setName: function(newName) {
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    },
    
    setSex: function(newSex) {
      if(typeof newSex === "string" && (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet("Vivie");
pet.getName();                  // Vivie
pet.setName("Oliver");
pet.setSex("male");
pet.getSex();                   // male
pet.getName();                  // Oliver
//16/////////////////
var getCode = (function(){
  var secureCode = "0]Eal(eh&2";    // A code we do not want outsiders to be able to modify...
  
  return function () {
    return secureCode;
  };
})();
getCode();    // Returns the secureCode
//16/////////////////
function myConcat(separator) {
   var result = ""; // initialize list
   var i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}
// returns "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");
// returns "elephant; giraffe; lion; cheetah; "
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
// returns "sage. basil. oregano. pepper. parsley. "
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");

//Parameters
//17//////////////////
function multiply(a, b) {
  b = typeof b !== 'undefined' ?  b : 1; 
  return a*b;
}
multiply(5); // 5 
//18///////////////////
function multiply(a, b = 1) { //EC6 way of defining degfault value
  return a*b;
}
multiply(5); // 5
//19//////////////////
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}
var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
//Arrow Functions
//20//////////////////
var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];

var a2 = a.map(function(s){ return s.length });

var a3 = a.map( s => s.length );
//This keyword
//23///////////////////
function Person() {
  "use strict"
  this.age = "5";
  console.log(this === window);
}
window.Person() // true
window.age // "5" it refers to the window objec

//24///////////////////
function Person() {
  "use strict"
  this.age = "5";
  console.log(this === window);
}
Person() // true
window.age // undefined ; the use strict will enforce to call from an object
//25///////////////////
var Person = {age:0, incre: function(){
  this.age ++;
}}
Person.incre();
//26///////////////////
function f(){
  return this.a;
}
var g = f.bind({a:"azerty"});
console.log(g()); // azerty
var o = {a:37, f:f, g:g};
console.log(o.f(), o.g()); // 37, azerty
//27///////////////////
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
//28///////////////////
// Call as a method of an object
var obj = {foo: foo};
console.log(obj.foo() === globalObject); // true

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
//28////////////////////
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}
var p = new Person();
//29/////////////////////


















