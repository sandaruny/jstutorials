
//
function multiMax(multi){
  // Make an array of all but the first argument
  var allButFirst = Array.prototype.slice.call(arguments,1);

  // Find the largest number in that array of arguments
  var largestAllButFirst = allButFirst.sort()[allButFirst.length - 1];

  // Return the multiplied result
  return multi * largestAllButFirst;
}
assert( multiMax(3, 1, 2, 3) == 9, "3*3=9 (First arg, by largest.)" );

//
var a = 5;
function runMe(a){
 assert( a == 6, "Check the value of a." );

 function innerRun(){
   assert( b == 7, "Check the value of b." );
   assert( c == undefined, "Check the value of c." );
 }

 var b = 7;
 innerRun();
 var c = 8;
}
runMe(6);

for ( var d = 0; d < 3; d++ ) {
 setTimeout(function(){
   assert( d == 3, "Check the value of d." );
 }, 100);
}
//#62
var count = 0;
for ( var i = 0; i < 4; i++ ) (function(i){
  setTimeout(function(){
    assert( i == count++, "Check the value of i." );
  }, i * 200);
})(i)

//

