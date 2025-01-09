const user = {
    username: "sparsh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "sparsh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "sparsh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "sparsh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "sparsh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()






// The biggest difference between normal functions and arrow functions lies in how they handle the this keyword.

// Normal Function:

// The value of this is dynamically determined based on how the function is called.
// In a regular function, this refers to the object that invoked the function (runtime context).
// Arrow Function:

// The this keyword in an arrow function is lexically bound, meaning it uses this from the surrounding context where the function was defined.




// Global Context
// In the global context:

// Node.js: this refers to the module.exports object (not the global object).
// Browser: this refers to the window object.