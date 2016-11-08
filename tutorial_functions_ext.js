
//Extended Function Patterns
//01
// antipattern
// // for illustration only
// global functions
function foo() {
  alert('global foo');
}
function bar() {
  alert('global bar');
}
function hoistMe() {
  console.log(typeof foo); // "function"
  console.log(typeof bar); // "undefined"
  foo(); // "local foo"
  bar(); // TypeError: bar is not a function
  // function declaration:
  // variable 'foo' and its implementation both get hoisted
  function foo() {
    alert('local foo');
  }
  // function expression:
  // only variable 'bar' gets hoisted
  // not the implementation
  var bar = function () {
    alert('local bar');
  };
}
hoistMe();

var scareMe = function () {
  alert("Boo!");
  scareMe = function () {
    alert("Double boo!");
  };
}

//03
var myFunc = function (param) {
  if (!myFunc.cache[param]) {
    var result = {};
    // ... expensive operation ...
    myFunc.cache[param] = result;
  }
  return myFunc.cache[param];
};
// cache storage
myFunc.cache = {};

//04
var alien = {
  sayHi: function (who) {
    return "Hello" + (who ? ", " + who : "") + "!";
  }
};
alien.sayHi('world'); // "Hello, world!"
sayHi.apply(alien, ["humans"]); // "Hello, humans!"

//05
var sayHi = function (who) {
  console.log(this);
  return "Hello" + (who ? ", " + who : "") + "!";
};

sayHi() // window object

function Hi(){console.log(this)}
Hi() //window object

//Currying
//Partial Application
function add(x, y){
  return x+y;
}

var d = add(5);
d(4) // print 9 -> this is currying (Haskell Curry)
     // this cannot be done with formal function declaration

//currying function
function schonfinkelize(fn) {
  var slice = Array.prototype.slice,
    stored_args = slice.call(arguments, 1); // stores arguments to be delivered
  return function () {
    var new_args = slice.call(arguments),
      args = stored_args.concat(new_args); // concat the new arguments with the stored ones
    return fn.apply(null, args);
  };
}
//Currying in EC6
// ES5
function logger (store) {
  return function (next) {
    return function (action) {
      console.log('dispatching', action);
      var result = next(action);
      console.log('next state', store.getState());
      return result;
    };
  }
}

// ES6
const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

//
var t = a => b => a+b;
t(5)(6); // 11

// Namespace Pattern 
//global object
var MYAPP = {};
// constructors
MYAPP.Parent = function () {};
MYAPP.Child = function () {};
// a variable
MYAPP.some_var = 1;
// an object container
MYAPP.modules = {};
// nested objects
MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = {a: 1, b: 2};
MYAPP.modules.module2 = {};


// We can't gurantee what executes first in this manner
// so we have to check before assigning values to the Object
var MYAPP = {};
// better
if (typeof MYAPP === "undefined") {
var MYAPP = {};
}
// or shorter
var MYAPP = MYAPP || {};var MYAPP = {};
// better
if (typeof MYAPP === "undefined") {
var MYAPP = {};
}
// or shorter
var MYAPP = MYAPP || {};

//Namespace function
var MYAPP = MYAPP || {};
MYAPP.namespace = function (ns_string) {
  var parts = ns_string.split('.'),
    parent = MYAPP,
    i;
  strip redundant leading global
  if (parts[0] === "MYAPP") {
    parts = parts.slice(1);
  }
  for (i = 0; i < parts.length; i += 1) {
    // create a property if it doesn't exist
    if (typeof parent[parts[i]] === "undefined") {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }
  return parent;
};

//Declaring Dependencies
//
var myFunction = function () {
  dependencies
  var event = YAHOO.util.Event,
    dom = YAHOO.util.Dom;
};

//Private Methods
// Achieved with closers but the obkject methods can
// be altered
function Gadget() {
  private member
  var specs = {
    screen_width: 320,
    screen_height: 480,
    color: "white"
  };
}
// public function
this.getSpecs = function () {
  return specs;
}

//
var myobj; // this will be the object
(function () {
  private members
  var name = "my, oh my";
  // implement the public part
  // note -- no `var`})
  myobj = {
    privileged method
    getName: function () {
      return name;
    }
  };
}());
myobj.getName(); // "my, oh my"

//
var myobj = (function () {
  private members
  var name = "my, oh my";
  // implement the public part
  return {
    getName: function () {
      return name;
    }
  };
}());

//
function Sandbox() {
  // turning arguments into an array
  var args = Array.prototype.slice.call(arguments),
    // the last argument is the callback
    callback = args.pop(),
    // modules can be passed as an array or as individual parameters
    modules = (args[0] && typeof args[0] === "string") ? args : args[0],
    i;
  // make sure the function is called
  // as a constructor
  if (!(this instanceof Sandbox)) {
    return new Sandbox(modules, callback);
  }
  // add properties to `this` as needed:
  this.a = 1;
  this.b = 2;
  // now add modules to the core `this` object
  // no modules or "*" both mean "use all modules"
  if (!modules || modules === '*') {
    modules = [];
    for (i in Sandbox.modules) {
      if (Sandbox.modules.hasOwnProperty(i)) {
        modules.push(i);
      }
    }
  }
  // initialize the required modules
  for (i = 0; i < modules.length; i += 1) {
    Sandbox.modules[modules[i]](this);
  }
}
// call the callback
callback(this);
// any prototype properties as needed
Sandbox.prototype = {
  name: "My Application",
  version: "1.0",
  getName: function () {
    return this.name;
  }
};

//private static methods
var Gadget = (function () {
  static variable/property
  var counter = 0;
  // returning the new implementation
  // of the constructor
  return function () {
    console.log(counter += 1);
  };
}()); // execute immediately}})

// Object constants  set(name, value), get(name), isDefined(name)
var constant = (function () {
  var constants = {},
    ownProp = Object.prototype.hasOwnProperty,
    allowed = {}})
  string: 1,
    number: 1,
    boolean: 1
  },
    prefix = (Math.random() + "_").slice(2);
  return {
    set: function (name, value) {
      if (this.isDefined(name)) {
        return false;
      }
      if (!ownProp.call(allowed, typeof value)) {
        return false;
      }
      constants[prefix + name] = value;
      return true;
    },
    isDefined: function (name) {
      return ownProp.call(constants, prefix + name);
    },
    get: function (name) {
      if (this.isDefined(name)) {
        return constants[prefix + name];
      }
      return null;
    }
  };
}());

// method sythetic sugar
if (typeof Function.prototype.method !== "function") {
  Function.prototype.method = function (name, implementation) {
    this.prototype[name] = implementation;
    return this;
  };
}

var Person = function (name) {
  this.name = name;
}.
  method('getName', function () {
    return this.name;
  }).
  method('setName', function (name) {
    this.name = name;
    return this;
  });

var a = new Person('Adam');
a.getName(); // 'Adam'
va.setName('Eve').getName(); // 'Eve'




