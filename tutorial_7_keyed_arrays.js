/////////////////////////
//Keyed Arrays
//01/////////////////////
var sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (var [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
//02//////////////////////
const privates = new WeakMap();

function Public() {
  const me = {
     "name":'jema'
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // Do stuff with private data in `me`...
};
privates.get(new Public) // {name: jema}
//03////////////////////////
var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (let item of mySet) console.log(item);
//04////////////////////////
for(let prop of d){console.log(prop)}
//05////////////////////////
Array.from(mySet); //[1, "some text"]
mySet2 = new Set([1,2,3,4]);//Set {1, 2, 3, 4}
//06////////////////////////












