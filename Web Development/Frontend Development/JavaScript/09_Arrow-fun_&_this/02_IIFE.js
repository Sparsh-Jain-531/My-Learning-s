// Immediately Invoked Function Expressions (IIFE)
// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed immediately after it is defined. It is a way to create a self-contained scope for variables and functions.


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // Missing semicolon can cause issues

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('sparsh');


// Why Use IIFE?

// 1. Avoid Global Scope Pollution:
// IIFEs create their own scope, preventing variables from polluting the global namespace.