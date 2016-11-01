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
var cats = [];
cats[30] = ['Dusty'];
console.log(cats.length); // 31
//08/////////////////////////
var cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // logs "Dusty,Misty" - Twiggy has been removed

cats.length = 0;
console.log(cats); // logs nothing; the cats array is empty

cats.length = 3;
console.log(cats); // [undefined, undefined, undefined]
//09//////////////////////////
var colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
  console.log(color);
});
//10//////////////////////////
var colors = ['red', 'green', 'blue'];
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
//12//////////////////////////
var array = ['first', 'second', , 'fourth'];

// returns ['first', 'second', 'fourth'];
array.forEach(function(element) {
  console.log(element);
})

if(array[2] === undefined) { console.log('array[2] is undefined'); } // true

var array = ['first', 'second', undefined, 'fourth'];

// returns ['first', 'second', undefined, 'fourth'];
array.forEach(function(element) {
  console.log(element);
})
//13/////////////////////////
var colors = ['red', 'green', 'blue'];
colors.length = 2;
colors.forEach(function(color) {
  console.log(color);
});   //red green
//14/////////////////////////
var myArray = new Array("1", "2", "3");
myArray = myArray.concat("a", "b", "c"); 
// myArray is now ["1", "2", "3", "a", "b", "c"]
//15/////////////////////////
var myArray = new Array("Wind", "Rain", "Fire");
var list = myArray.join(" - "); // list is "Wind - Rain - Fire"
//16/////////////////////////
var myArray = new Array ("1", "2", "3");
var first = myArray.shift(); 
// myArray is now ["2", "3"], first is "1"
//17/////////////////////////
var myArray = new Array ("1", "2", "3");
myArray.unshift("4", "5"); 
// myArray becomes ["4", "5", "1", "2", "3"]
//18/////////////////////////
var myArray = new Array ("a", "b", "c", "d", "e");
myArray = myArray.slice(1, 4); // starts at index 1 and extracts all elements
                               // until index 3, returning [ "b", "c", "d"]
//19/////////////////////////
var myArray = new Array ("1", "2", "3", "4", "5");
myArray.splice(1, 2, "a", "b", "c", "d");  // return ["2", "3"]
myArray;  //["1", "a", "b", "c", "d", "4", "5"]

//20/////////////////////////
var a = ['a', 'b', 'a', 'b', 'a'];
console.log(a.indexOf('b')); // logs 1
// Now try again, starting from after the last match
console.log(a.indexOf('b', 2)); // logs 3
console.log(a.indexOf('z')); // logs -1, because 'z' was not found
//21/////////////////////////
var a = ['a', 'b', 'c', 'd', 'a', 'b'];
console.log(a.lastIndexOf('b')); // logs 5
// Now try again, starting from before the last match
console.log(a.lastIndexOf('b', 4)); // logs 1
console.log(a.lastIndexOf('z')); // logs -1
//22/////////////////////////
var a = [10, 20, 30];
var total = a.reduce(function(first, second) { return first + second; }, 0);
console.log(total) 
//23/////////////////////////
Array.prototype.forEach.call("a string", function(chr) {
  console.log(chr);
});










