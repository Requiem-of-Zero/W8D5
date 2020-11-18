// // mybind without arguments
// Function.prototype.myBind = (cb) => {
//   return function() {
//     this.apply(cb)
//   }
// }

// //mybind with arguments
// Function.prototype.myBind = (cb, ...args) => {
//   return function (...finalargs) {
//     return this.apply(cb, args.concat(finalargs));
//   };
// };

Function.prototype.myBind = function(newThis) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }
  let boundTargetFunction = this;
  return function boundFunction() {
    return boundTargetFunction.apply(newThis);
  };
};


class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"

// bind(newcontext)(argument1,args2...)