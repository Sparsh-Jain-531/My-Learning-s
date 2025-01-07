//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let name="Shaktiman";
let anothername=name;
anothername="spiderman"

// For primitive only copy of value is made for other variable(anothername) not the reference that's why variable(name) is not changed

console.log(name);
console.log(anothername);


const userone={
    name:"sparsh",
    age:22,
}

const usertwo=userone;

usertwo.name="sontu";
console.log(userone.name);
console.log(usertwo.name);

//datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory
// (copy of value is passed not the original value is passed)
// that's why when we change the value of anothername, name is not changed

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory
// (Reference is passed that's why change by any one of the variable changes the value for other variable who are refrencing to same value & even the original variable value will be changed).


// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.