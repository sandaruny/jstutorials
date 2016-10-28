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
/**
 * Example 1
 */
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
//15///////////////
/**
 * Example 1
 */
log(x === undefined); // x is not defined
var myvar = "my value";
 
(function() {
  log(myvar); // undefined
  var myvar = "local value";
})();
//16////////////////





