///////////////////////
//Expressions
//01///////////////////
10||-1 // 10

-1||10 // -1

true||false //true

false||false //false

false||true //true

-1||10 // -1

0||10 //10

new Boolean(-1).toString() // "true"
if(-1){console.log('true')} // true

//02///////////////////
var a1 =  true && true;     // t && t returns true
var a2 =  true && false;    // t && f returns false
var a3 = false && true;     // f && t returns false
var a4 = false && (3 == 4); // f && f returns false
var a5 = "Cat" && "Dog";    // t && t returns Dog
var a6 = false && "Cat";    // f && t returns false
var a7 = "Cat" && false;    // t && f returns false
//03////////////////////
var o1 =  true || true;     // t || t returns true
var o2 = false || true;     // f || t returns true
var o3 =  true || false;    // t || f returns true
var o4 = false || (3 == 4); // f || f returns false
var o5 = "Cat" || "Dog";    // t || t returns Cat
var o6 = false || "Cat";    // f || t returns Cat
var o7 = "Cat" || false;    // t || f returns Cat

//04////////////////////
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
if (3 in trees) {
  // this does not get executed
}
trees //["redwood", "bay", "cedar", undefined × 1, "maple"]
//05////////////////////
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var today = new Date();

typeof myFun;     // returns "function"
typeof shape;     // returns "string"
typeof size;      // returns "number"
typeof today;     // returns "object"
typeof dontExist; // returns "undefined"
//06/////////////////////
typeof true; // returns "boolean"
typeof new Boolean('true');  // "object"
typeof null; // returns "object"
//07/////////////////////
typeof document.lastModified; // returns "string"
typeof window.length;         // returns "number"
typeof Math.LN2;              // returns "number"
typeof "Hello world"; // returns "string"
typeof Object;        // returns "function" "function"
typeof Object.prototype; // "object"
//objectName instanceof objectType
//08/////////////////////
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
//09/////////////////////
function f(x, y, z) { console.log(x,y,z) }
var args = [0, 1, 2];
f(...args);
//10/////////////////////
var msPerDay = 24 * 60 * 60 * 1000;
 
// July 17, 2014 00:00:00 UTC.
var july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

var options = { year: "2-digit", month: "2-digit", day: "2-digit",
                hour: "2-digit", minute: "2-digit", timeZoneName: "short" };
var americanDateTime = new Intl.DateTimeFormat("en-US", options).format;
 
console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT
//11/////////////////////
var gasPrice = new Intl.NumberFormat("en-US",
                        { style: "currency", currency: "USD",
                          minimumFractionDigits: 3 });
 
console.log(gasPrice.format(5.259)); // $5.259

var hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec",
                        { style: "currency", currency: "CNY" });
 
console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五
//12//////////////////////
// The name string contains multiple spaces and tabs,
// and may have multiple spaces between first and last names.
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

var output = ["---------- Original String\n", names + "\n"];

// Prepare two regular expression patterns and array storage.
// Split the string into array elements.

// pattern: possible white space then semicolon then possible white space
var pattern = /\s*;\s*/;

// Break the string into pieces separated by the pattern above and
// store the pieces in an array called nameList
var nameList = names.split(pattern);

// new pattern: one or more characters then spaces then characters.
// Use parentheses to "memorize" portions of the pattern.
// The memorized portions are referred to later.
pattern = /(\w+)\s+(\w+)/;

// New array for holding names being processed.
var bySurnameList = [];

// Display the name array and populate the new array
// with comma-separated names, last first.
//
// The replace method removes anything matching the pattern
// and replaces it with the memorized string—second memorized portion
// followed by comma space followed by first memorized portion.
//
// The variables $1 and $2 refer to the portions
// memorized while matching the pattern.

output.push("---------- After Split by Regular Expression");

var i, len;
for (i = 0, len = nameList.length; i < len; i++){
  output.push(nameList[i]);
  bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
}

// Display the new array.
output.push("---------- Names Reversed");
for (i = 0, len = bySurnameList.length; i < len; i++){
  output.push(bySurnameList[i]);
}

// Sort by last name, then display the sorted array.
bySurnameList.sort();
output.push("---------- Sorted");
for (i = 0, len = bySurnameList.length; i < len; i++){
  output.push(bySurnameList[i]);
}

output.push("---------- End");

console.log(output.join("\n"));
/* ---------- Original String

Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand 

---------- After Split by Regular Expression
Harry Trump
Fred Barney
Helen Rigby
Bill Abel
Chris Hand 
---------- Names Reversed
Trump, Harry
Barney, Fred
Rigby, Helen
Abel, Bill
Hand, Chris 
---------- Sorted
Abel, Bill
Barney, Fred
Hand, Chris 
Rigby, Helen
Trump, Harry
---------- End
*/
//13////////////////////////



























