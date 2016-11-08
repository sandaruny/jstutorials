/////////////////////////
//Meta
//01/////////////////////
var handler = {
  get: function(target, name){
    return name in target ? target[name] : 42;
}};
var p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42

//02
var handler = {
  get: function(target, name){
    return name in target ? target[name] : 42;
}};
var p = new Proxy({}, handler);
p.a = 1;
p.b = 2;
p.c = 3;
console.log(p.a, p.b, p.d); 	// 1 2 42
//03
var revocable = Proxy.revocable({}, {
  get: function(target, name) {
    return "[[" + name + "]]";
  }
});
var proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]" 
console.log(proxy.foo); // [[foo]]
console.log(proxy.foo); //[[foo]]
console.log(proxy.foo); //[[foo]]
console.log(proxy.daa); // [[daa]]
revocable.revoke();

console.log(proxy.foo); // TypeError is thrown
proxy.foo = 1           // TypeError again
delete proxy.foo;       // still TypeError
typeof proxy   // // "object", typeof doesn't trigger any trap
//04
Reflect.has(Object, "assign"); //true
//05
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
//06
Reflect.apply(Math.floor, undefined, [1.75]); // 1;
Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]); // "hello"
Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index; // 4
Reflect.apply("".charAt, "ponies", [3]);// "i"
//07
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}






