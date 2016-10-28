//1////////////
var d = 'x';

function test(){
  var d = 'k';
}

test();
log(d); // x

//2////////////
var d = 'x';

function test(){   
  d = 'k';
}

test();
log(d); // k 
//3////////////

let d = 'x';

function test(){   
  d = 'k';
}

test();
log(d); // k
//4////////////

let d = 'x';

function test(){   
  let d = 'k';
}

test();
log(d); // k
//5/////////////	

const d = 'x';

function test(){   
 d = 'k';
}

test();
log(d); // error

///6///////////

var a;
log("The value of a is " + a); // The value of a is undefined

log("The value of b is " + b); // Uncaught ReferenceError: b is not defined

log("The value of c is " + c); // The value of c is undefined
var c;

log("The value of x is " + x); // Uncaught ReferenceError: x is not defined
let x;

//7///////////////
var input;
if(input === undefined){
  doThis(); // execute this. but undefined doThis
} else {
  doThat();
}
//8///////////////
var myArray = [];
log(myArray[0]) // udefined 
if (!myArray[0]) myFunction(); //exec
//9///////////////
var a;
log(a + 2);  // Evaluates to NaN(Not a Number)
//10//////////////
var n = null;
log(n * 32); //0
//////////////////
///Scope
//11//////////////
if (true) {
  var x = 5;
}
log(x);  // x is 5
//12//////////////
if (true) {
  let y = 5;
}
log(y);  // ReferenceError: y is not defined

/////////////////
//Variable hoisting
//13/////////////
log(x === undefined); // true
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = "my value";
 
(function() {
  log(myvar); // undefined
  var myvar = "local value";
})();
//14//////////////
log(x === undefined); // true
var x = 3;

// will return a value of undefined
var myvar = "my value";
 
(function() {
  log(myvar); // undefined
  var myvar = "local value";
})();
//15///////////////
log(x === undefined); ReferenceError:  // x is not defined 
//16////////////////
log(x); // ReferenceError not defined
let x = 3;
///////////////////
//Function hoisting
//16///////////////
/* Function declaration */
foo(); // "bar"

function foo() {
  console.log("bar"); // hoisted top
}
baz(); // TypeError: baz is not a function
var baz = function() {
  console.log("bar2");
};
///////////////////
// Constants
//17///////////////
const d; // Missing initializer in const declaration
//18///////////////
function f() {};
const f = 5; // ERROR Identifier 'f' has already been declared
//19///////////////
function f() {
  const g = 5;
  var g; // Identifier 'g' has already been declared	
}
//20///////////////
function f() {
  var g = 5;
  var g = 7; // no error
}
//21////////////////
function f() {
  let g = 5;
  let g = 7; // ERROR: dentifier 'g' has already been declared
}
//22////////////////
const MY_OBJECT = {"key": "value"};
MY_OBJECT.key = "otherValue"; // no error
////////////////////
//##Data structures and types
//Data type conversion
//23////////////////
//adequately equal
var x = 1;
log(x); // 1
if (true) {
	var x = 2;
	log(x); // 2
}
log(x); // 2
//24/////////////////
function foo() {
	var x = 1; log(x) //1
	if (x) {
		(function () {
			var x = 2;log(x) //1
			// some other code
		}());
	}
	log(x) //2
	// x is still 1.
}
foo();
//25//////////////////
function test() {
	foo(); // TypeError "foo is not a function"
	bar(); // "this will run!"
	var foo = function () { // function expression assigned to local variable 'foo'
		alert("this won't run!");
	}
	function bar() { // function declaration, given the name 'bar'
		alert("this will run!");
	}
}
test();
//////////////////////
//Literals
//26//////////////////
var fish = ["Lion", , "Angel"];
log(fish[1]) // 3 length 
//27//////////////////
var list = ['home', , 'school', , ];
log(list.length) // 4
log(list[6]) // undefined
//27///////////////////
var sales = "Toyota";

function carTypes(name) {
  if (name === "Honda") {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda // this is not the function
console.log(car.special); // Toyota
//27////////////////////
var unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!"
}
console.log(unusualPropertyNames."");   // SyntaxError: Unexpected string
console.log(unusualPropertyNames[""]);  // An empty string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
console.log(unusualPropertyNames["!"]); // Bang!
//28////////////////////
var obj = {
    // __proto__
    __proto__: theProtoObj,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};
//29/////////////////////
var foo = {a: "alpha", 2: "two"};
console.log(foo.a);    // alpha
console.log(foo[2]);   // two
//console.log(foo.2);  // Error: missing ) after argument list
//console.log(foo[a]); // Error: a is not defined
console.log(foo["a"]); // alpha
console.log(foo["2"]); // two

// RegExp literals
//30//////////////////////
var re = /ab+c/;

































