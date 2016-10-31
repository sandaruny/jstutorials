///////////////////////////
//Arrays
//01///////////////////////
var arrayLength = 4;
var arr = new Array(arrayLength);
var arr = Array(arrayLength);

// This has exactly the same effect
var arr = [];
arr.length = arrayLength;
//02///////////////////////
var arr = [42];      // Creates an array with only one element:
                     // the number 42.

var arr = Array(42); // Creates an array with no elements
                     // and arr.length set to 42; this is
                     // equivalent to:
var arr = [];
arr.length = 42;
//03///////////////////////
var arr = Array(9.3); // RangeError
//04///////////////////////
var emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
//05////////////////////////
var arr = [];
arr[3.4] = "Oranges";
console.log(arr.length);                // 0
console.log(arr.hasOwnProperty(3.4));   // true // array has the element '3.4' :
// "Oranges"
//05////////////////////////
var myArray = new Array("Hello", myVar, 3.14159);
var myArray = ["Mango", "Apple", "Orange"]
//06////////////////////////
var arr = ["one", "two", "three"];
arr[2];  // three
arr["length"];  // 3 access length property
//07////////////////////////

 











