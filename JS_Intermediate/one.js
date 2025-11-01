// 1. Explain what a closure is and give an example.

/*  

Def: A closure is a feature in JavaScript where an inner function has access to the variables and scope of its outer function, even after the outer function has finished executing.

A closure is formed when a function “remembers” the variables from the place where it was created, even if it’s executed elsewhere.

outerFun is called, inside it the variable counter is initailized with the value 0.
The function innerFunction is defined (but not executed yet).
outerFunction returns the innerFunction without executing it.
Normally, local variables (counter) would be destroyed when a function finishes.
But since innerFunction still references counter, JavaScript keeps it alive in memory — this is the closure.
myCounter now holds a reference to the returned innerFunction, along with its closure

Each time myCounter() runs:
It accesses the counter variable inside its closure.
Increments it.
Logs the updated value.
Because of closure, counter remembers its previous value across multiple calls.

Pros: 
Closures allow data privacy — variables inside the closure are not accessible from outside.
Closures help in creating stateful functions.

common use cases:
Maintaining state (as in counters)
Creating function factories
Implementing private variables or modules


*/

// function outerFunction() {
//     let counter = 0  // variable in the outer scope
//     function innerFunction() {
//         counter++
//         console.log(counter);
//     }
//     return innerFunction   // returning innerFunction inside the outerFunction
// }

// const myCounter = outerFunction()   // outerFunction runs and returns the innerFunction
// myCounter()
// myCounter()
// myCounter()



// 2. What is the event loop in JavaScript?

/* 

Def: The Event Loop in JavaScript is a mechanism that continuously checks and manages the execution of code, the call stack, and the callback (task) queues, ensuring non-blocking asynchronous behavior in JavaScript.

The event loop helps JavaScript perform multiple tasks asynchronously (like handling promises, timeouts, etc.) even though it runs on a single thread.






*/