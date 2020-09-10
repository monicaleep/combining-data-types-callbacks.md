// Make a function add that takes two arguments (numbers) and sums them together
const add = (a,b) => {
  return a+b;
}
// Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract = (a,b) => {
  return a-b
}
// Make a function multiply that takes two arguments and multiplies them
const multiply = (a,b) => {
  return a*b
}

// Make a function divide that takes two arguments and divides them
const divide = (a,b) => {
  return a/b
}

// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
const calculate = (num1,num2,operates) => {
  return operates(num1,num2)
}

// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
// See above


// Call calculate 4 times, each time using one of the operation functions you wrote
calculate(3,4,add);
calculate(10,8,subtract);
calculate(7,8,multiply);
calculate(99,3,divide);



// Clean up this code, so that it works and has function definitions in the correct place
// Need to move the function call below the function definition
const bar = () => {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
foo();




// What is meant by the error(s) this produces?
foo();

const foo () =>{
    console.log('hi');
}
// The first error given says "Syntax Error Missing Initializer in const declaration", to me this is saying you forgot the initiazlier which is the equals sign
// After fixing that, you get "Reference Error" which is because foo is called before is it declared and initialized.

//This would be the corrected code:
const foo =() =>{
    console.log('hi');
}
foo();



// =======================================
// Array Methods with Callbacks
// =======================================
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//EVERY
//Determine if every number is greater than or equal to 0
nums.every(num=>num>0)
//determine if every word shorter than 8 characters
panagram.every(word=>word.length<8)
