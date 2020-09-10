// 1-2 Sentences about each topic
// DRY
// This stands for "Don't Repeat Yourself", if you find yourself writing the same lines or similar lines of code over and over, you should use a function to do this task. Or a loop if applicable.

// KISS
// This stands for "Keep it simple stupid", which is also a good life mantra. Keep your code as simple as possible while achieving the goal to avoid bugs or confusion, and so you don't hate yourself when you go back to modify it

// Avoid creating a YAGNI
// Try not to add an features or functionality until you need it. This follows KISS, and avoids creating problems for the future.

// Do the simplest thing that could possibly work
// If it works and it's stupid it still works. Worry about making things fancy later on, or expanding functionality only if necessary.

// Don't make me think
// Code should be easy to understand, this is also important for commenting the code you right and also using good names for functions and variables. This can also be applied to websites etc where the user should easily be able to understand how to navigate and use it.

// Write code for the maintainer
// The code you write should be easy for someone to approach and use or make changes to if needed. Use comments and well described functions and variable names. Seems similar to "Don't make me think" above

// Single responsibility principle
// A component of your code should only do one main thing, this will make debugging easier and also extending the features later on.

// Avoid premature optimization
// Get the code to work first and then worry about optimization. This ensures at least you can submit your deliverable on time before trying to worry about if it's an ideal solution.

// Separation of concerns
// It seems similar to "Single responsibility principle" but kinda different. Each part of the code should do one thing and not overly affect other parts of the code. Like how your HTML should be HTML, CSS should be styles, and you can have only interactivity in JS.


//Which ones surprise you (if any)?
// Probably "do the simplest thing that could possibly work", because code to me is always complicated and large

//Which one is currently giving you the most struggle?
// Write Code for the maintainer.... actually when I went back over my deliverable like Landscaper a few days after I wrote it I realized I didn't comment very much and it was hard to start up again.

// =====================================================

// this function f takes l as a parameter
const f = l => {
  //initialize four variables
  let es = 0, p = 0, c = 1, n = 0
  // while c (initaliiy 1) is less than l (the input parameter)
  while (c <= l) {
    // set n to the sum of c+p
    n = c + p;
    // reassign c to be n and p to be c
    [c, p] = [n, c]
    // if c is even, add c to es, otherwise don't add anything to es
    es += (c % 2 === 0) ? c : 0
  }
  // return es
  return es
}

console.log(f(55))


///In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
// A: I think this is the even summed fibonacci problem so a good function name would be "evenFibSum". I think expanding out the variable names would help too, and getting rid of the array reassignment in favor of traditional reassignment. Yeah to be honest without the second version of the function with names, I could tell WHAT it was doing but not really any context/WHY. Maybe a comment at the top of the function to explain what the input and output is - i.e. this function takes a number and computes the sum of all even fibonacci numbers less than the given input.

//If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
// A: Definitely f2!!!


//Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
// A: Yes! Actually when I was testing the code in repl I put a console.log above the 4th line without a semi-colon, and kept getting an error... from  MDN:
// "Your ( ... ) expression needs to be preceded by a semicolon or it may be used to execute a function on the previous line. "
