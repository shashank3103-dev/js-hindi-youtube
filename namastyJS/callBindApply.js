//call()
//apply()
//bind()

//call the functions with different contexts and arguments
//bind the functions to specific contexts and use them later 
//apply the functions with an array of arguments

//call is used to invoke functions with a specified 'this' context and individual arguments.
//apply is similar to call but takes arguments as an array.
//bind returns a new function with a specified 'this' context and optional preset arguments.

function callBindApply() {
  function greet(greeting, punctuation) {
    return greeting + ', ' + this.name + punctuation;
  }

  const person = { name: 'Alice' };

  // Using call
  const greetCall = greet.call(person, 'Hello', '!');
  console.log(greetCall); // Output: Hello, Alice!

  // Using apply
  const greetApply = greet.apply(person, ['Hi', '.']);
  console.log(greetApply); // Output: Hi, Alice.

  // Using bind
  const greetBind = greet.bind(person);
  const boundGreet = greetBind('Hey', '?');
  console.log(boundGreet); // Output: Hey, Alice?
}

callBindApply();

//callBindApply.js ends here