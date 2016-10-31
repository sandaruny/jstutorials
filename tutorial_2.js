//////////////////////
// Block Statements
//01//////////////////
while (x < 10) {
  x++;  // {x++;} is the block statement
}
//02//////////////////
var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2
//03//////////////////
if (x = y) {
  console.log('statement'); // this is checked for numerals
}
//04//////////////////
throw "Error2";   // String type Uncaught Error2
throw 42;         // Number type Uncaught 42
throw true;       // Boolean type ncaught true 
throw {toString: function() { return "I'm an object!"; } }; //Uncaught Object
//05///////////////////
myMonth = 14;
function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
                "Aug","Sep","Oct","Nov","Dec"];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; //throw keyword is used here
  }
}

try { // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
  monthName = "unknown";
  console.log(e); // pass exception object to error handler -> your own function
}
//05/////////////////////
function f() {
  try {
    throw "bogus";
  } catch(e) {
    console.log('caught inner "bogus"');
    throw e; // this throw statement is suspended until 
             // finally block has completed
  } finally {
    return false; // overwrites the previous "throw"
  }
  // "return false" is executed now
}

try {
  f();
} catch(e) {
  // this is never reached because the throw inside
  // the catch is overwritten
  // by the return in finally
  console.log('caught outer "bogus"'); // this is not called.
}
// Nesting with return in final
//06//////////////////////
try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  }
  finally {
    console.log("finally");
    return;
  }
}
catch (ex) {
  console.error("outer", ex.message);
}
//Error Object {name,message}
//07///////////////////////
function doSomethingErrorProne () {
  if (true) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
try {
  doSomethingErrorProne();
} catch (e) {
  console.log(e.name); // logs 'Error'
  console.log(e.message); // logs 'The message' or a JavaScript error message)
}
//07





