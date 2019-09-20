// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(a,b, callback){
  return callback(a,b);
}
concat = (a,b) =>{
  return "I'm hungry. " + "I'm going to cook something to eat."

}

console.log(consume(1,2,concat));


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
/* Sum of two numbers */
sum = (a, b) => {
  return a + b;
}

console.log(consume(1, 2, sum));

/*Multiply two numbers*/
multiply = (a, b) => {
  return a * b;
}

console.log(consume(1, 2, multiply));

/*Greeting*/
greeting = (firstName,lastName) => {
  return `Hello, ${firstName} ${lastName}, nice to meet you.`;
}

function greetingWithNames(callback) {
  const firstName = 'Craig';
  const lastName = 'Friday';
  callback(firstName,lastName);
}

greeting(greetingWithNames);

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
