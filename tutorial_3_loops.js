////////////////////////
// Loops
//01////////////////////
var step;
for (step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}
//02////////////////////fiddle
<form name="selectForm">
  <p>
    <label for="musicTypes">Choose some music types, then click the button below:</label>
    <select id="musicTypes" name="musicTypes" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>Jazz</option>
      <option>Blues</option>
      <option>New Age</option>
      <option>Classical</option>
      <option>Opera</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="How many are selected?" /></p>
</form>
/////js
function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
  alert('Number of options selected: ' + howMany(document.selectForm.musicTypes))
});
//03////////////////////
while(){
  console.log('okay'); break;
}
//VM1353:1 Uncaught SyntaxError: Unexpected token )
//04////////////////////
for(;;){
console.log('okay'); break; 
} // okay
//05
markLoop:
while (theMark == true) {
   doSomething();
}
// labels
//06//////////////////// 
var i, j;

loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
      if (i === 1 && j === 1) {
         continue loop1;
      }
      console.log("i = " + i + ", j = " + j);
   }
}
//break
//07////////////////////
var x = 0;
var z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops: " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops: " + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops; // this will stop execution of labelCancelLoops
	// and stop execution
    } else if (z === 10) {
      break;
    }
  }
}
// continue
//08////////////////////
var i = 0;
var n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue; // loop brings to the top with values intact
  }
  n += i;
}
//09////////////////////
var car = {make:'bmw', model:'520d'}
function dump_props(obj, obj_name) {
  var result = "";
  for (var i in obj) { // iterate over properties
    result += obj_name + "." + i + " = " + obj[i] + "<br>";
  }
  result += "<hr>";
  return result;
}
dump_props(car, "mycar");
// "mycar.make = bmw<br>mycar.model = 520d<br><hr>"
//10/////////////////////
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs "3", "5", "7"
}
0
1
2
foo
3
5
7
//10/////////////////////
//10/////////////////////
//10/////////////////////
//10/////////////////////
//10/////////////////////
//10/////////////////////
//10/////////////////////
//










