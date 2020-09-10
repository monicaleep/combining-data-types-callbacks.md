// Make a function add that takes two arguments (numbers) and sums them together
const add = (a, b) => {
  return a + b;
}
// Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract = (a, b) => {
  return a - b
}
// Make a function multiply that takes two arguments and multiplies them
const multiply = (a, b) => {
  return a * b
}

// Make a function divide that takes two arguments and divides them
const divide = (a, b) => {
  return a / b
}

// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
const calculate = (num1, num2, operates) => {
  return operates(num1, num2)
}

// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
// See above


// Call calculate 4 times, each time using one of the operation functions you wrote
calculate(3, 4, add);
calculate(10, 8, subtract);
calculate(7, 8, multiply);
calculate(99, 3, divide);



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

const foo() => {
  console.log('hi');
}
// The first error given says "Syntax Error Missing Initializer in const declaration", to me this is saying you forgot the initiazlier which is the equals sign
// After fixing that, you get "Reference Error" which is because foo is called before is it declared and initialized.

//This would be the corrected code:
const foo = () => {
  console.log('hi');
}
foo();



// =======================================
// Array Methods with Callbacks
// =======================================
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']



//Every
//Determine if every number is greater than or equal to 0
nums.every(num => num >= 0) //true
//determine if every word shorter than 8 characters
panagram.every(word => word.length < 8) //true

//Filter
//filter the array for numbers less than 4
nums.filter(num => num < 4) //[1,2,3,0]
//filter words that have an even length
panagram.filter(word => word.length % 2 === 0) // [over,lazy]

// Find
// Find the first value divisible by 5
nums.find(num => num % 5 === 0) // 5
// find the first word that is longer than 5 characters
panagram.find(word => word.length > 5) //nothing

// Find Index
// find the index of the first number that is divisible by 3
nums.findIndex(num => num % 3 === 0) // 2, nums[2] is 3
// find the index of the first word that is less than 2 characters long
nums.findIndex(word => word.length < 2) // -1

// For Each
// console.log each value of the nums array multiplied by 3
nums.forEach(num => console.log(num * 3))
// console.log each word with an exclamation point at the end of it
panagram.forEach(word => console.log(word + "!"))

// Map
// make a new array of each number multiplied by 100
const newNums = nums.map(num => num * 100)
console.log(newNums)
// make a new array of all the words in all uppercase
const loudly = panagram.map(word => word.toUpperCase());
console.log(loudly)

// Some
// Find out if some numbers are divisible by 7
nums.some(num => num % 7 === 0) //true
// Find out if some words have the letter a in them
panagram.some(word => word.includes('a')) //true


// ============================================
// Hungry for more?
// ============================================
// Reduce
// Add all the numbers in the array together using the reduce method
nums.reduce((acc, cur) => acc + cur) // 55

// concatenate all the words using reduce
panagram.reduce((acc, cur) => acc + cur) // Thequickbrownfoxjumpsoverthelazydog


// Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?
nums.sort() // [0,1,10,2,3,4,5,6,7,8,9] no, it must convert to string before sorting
// Try to sort without any arguments, do you get what you'd expect with the words array?
panagram.sort() // No , the capital lettered "The" comes at the beginning!
// Sort the numbers in ascending order
nums.sort((a, b) => a - b)
// Sort the numbers in descending order
nums.sort((a, b) => b - a)
// Sort the words in ascending order
panagram.sort((a, b) => {
  let first = a.toUpperCase();
  let second = b.toUpperCase();
  if (first < second) {
    return -1
  } else {
    return 1
  }
})
// Sort the words in descending order
panagram.sort((a, b) => {
  let first = a.toUpperCase();
  let second = b.toUpperCase();
  if (first < second) {
    return 1
  } else {
    return -1
  }
})


// =========================================
// Array Methods Challenge Problems
// =========================================


// function to check if an array of words is a panagram => contains every letter in the alphabet;
function isPanagram(array) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  // turn alphabet into an array and use the every function to check if every letter in alphabet is in panagram;
  return alphabet.split("").every(letter => {
    // return true if the letter (from alphabet) is in the provided array
    return (array.join(" ").toLowerCase().includes(letter))
  })
}
//;
isPanagram(panagram) // true
isPanagram(['a']) // false
