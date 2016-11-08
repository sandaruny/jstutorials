//Iterator
//01
function makeIterator(array){
    var nextIndex = 0;
    
    return {
       next: function(){
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    }
}
//02
function* idMaker(){
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
myIterable
ObjectSymbol(Symbol.iterator): ()arguments: (...)caller: (...)length: 0name: ""prototype: Generator__proto__: GeneratorFunction[[FunctionLocation]]: VM552:2[[IsGenerator]]: true[[Scopes]]: Scopes[1]__proto__: Object


Symbol.iterator //Symbol(Symbol.iterator)
//03
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
console.log(gen.next().value); // undefined
//04
function* logGenerator() {
  console.log(yield);
  console.log(yield);
  console.log(yield);
}
var gen = logGenerator();
// the first call of next executes from the start of the function
// until the first yield statement
gen.next(); 
gen.next('pretzel'); // pretzel
gen.next('california'); // california
gen.next('mayonnaise'); // mayonnaise
//05
for(let value of ["a", "b", "c"]){
    console.log(value)
}
function* gen(){
  yield* ["a", "b", "c"]
}
gen().next()//Object {value: "a", done: false}
gen().next()//Object {value: "a", done: false}

[a, b, c] = new Set(["a", "b", "c"])
Set {"a", "b", "c"}
a //"a"
b //"b"
c //"c"
//06
function* fibonacci(){
  var fn1 = 0;
  var fn2 = 1;
  while (true){  
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    var reset = yield current;
    if (reset){
        fn1 = 0;
        fn2 = 1;
    }
  }
}

var sequence = fibonacci();
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next(true).value); // 0 //  set the value to reset
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
//07
var handler = {
  get: function(target, name){
    return name in target ? target[name] : 42;
}};
var p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42





