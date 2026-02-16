//This Keyword in JavaScript
// The 'this' keyword refers to the object it belongs to
// In a method, 'this' refers to the owner object
// Alone, 'this' refers to the global object (window in browsers)
// In a function, 'this' refers to the global object (in non-strict mode)
// In strict mode, 'this' is undefined in functions
// In an event, 'this' refers to the element that received the event
// Example of 'this' in different contexts
// Global context
console.log(this); // In global context, refers to global object (window in browsers)

function show() {
  console.log(this); // In non-strict mode, refers to global object
}
show();

this.name = "GlobalName";
const obj = {
  name: "NamastyJS",
  greet: function() {
    console.log(this.name); // Refers to obj
  },  
        arrowGreet: () => {
        console.log(this.name); // In arrow function, 'this' refers to enclosing context (global object here)
        }
};
obj.greet(); // Outputs: NamastyJS
obj.arrowGreet(); // Outputs: undefined (or global name if defined)


// "use strict";
function strictFunction() {
  console.log(this); // In strict mode, 'this' is undefined
}
strictFunction();  

// Event example (uncomment when running in a browser environment)