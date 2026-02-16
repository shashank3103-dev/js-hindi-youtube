//prototype
// Extend the String prototype to include a method that capitalizes the first letter of each word in a string
String.prototype.capitalizeWords = function() {
  return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// Example usage:
const myString = "hello world from prototype";
console.log(myString.capitalizeWords()); // Output: "Hello World From Prototype"

// Extend the Array prototype to include a method that returns the last element of the array
Array.prototype.last = function() {
  return this[this.length - 1];
};

// Example usage:
const myArray = [1, 2, 3, 4, 5];
console.log(myArray.last()); // Output: 5

// Extend the Number prototype to include a method that checks if the number is even
Number.prototype.isEven = function() {
  return this % 2 === 0;
};

// Example usage:
const myNumber = 4;
console.log(myNumber.isEven()); // Output: true


//__proto__
// Create an object with a prototype chain
const animal = {
  speak: function() {
    console.log("Animal speaks");
  }
};

const dog = Object.create(animal);
dog.bark = function() {
  console.log("Dog barks");
};

// Example usage:
dog.speak(); // Output: Animal speaks
dog.bark();  // Output: Dog barks

//inheritance using prototypes
function Person(name) {
  this.name = name;
}

Person.prototype.introduce = function() {
  console.log("Hello, my name is " + this.name);
};

function Student(name, studentId) {
  Person.call(this, name); // Call the parent constructor
  this.studentId = studentId;
}

// Set up inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  console.log(this.name + " is studying.");
};

// Example usage:
const student1 = new Student("John", "S12345");
student1.introduce(); // Output: Hello, my name is John
student1.study();     // Output: John is studying.

// Prototype.js ends here