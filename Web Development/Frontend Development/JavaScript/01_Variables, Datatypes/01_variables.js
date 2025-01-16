// Variables in JavaScript are containers for storing data values. They allow you to store, modify, and retrieve data during the execution of your code. In JavaScript, there are three main ways to declare variables: var, let, and const.

const a=45;
// const : Variable cannot be re-declared or updated. A block scope variable.

let name="Sparsh";
// let : Variable cannot be re-declared but can be updated. A block scope variable.

var id="1458";
// var : Variable can be re-declared & updated. A global scope variable

account=147852;

let data;

// prefer not to use var due to its global scope(issue in block scope and functional scope, if you declare a variable using var inside a block, it will be available outside the block as well and you can redeclare the variable using var and can change its value)

console.log(a,name,id,account,data);
console.table([a,name,id,account,data]);

// Take input from user
let age=prompt("Enter your age")
console.log(age, typeof age);

age=Number.parseInt(age);
console.log(age, typeof age);