// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Sparsh",
    "full name": "Sparsh Jain",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Sparsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

//Which one to use?
//use dot notation by default.
//for properties that don't work,use bracket notation.

JsUser.email = "Sparsh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Sparsh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


const product={
    name:"shity",
    ["delivery-time"]:"1 Day",
    rating:{
        starts:4.5,
        reviews:1000
    },
    fun: function hello(){
        console.log("Hello Product Fun")
    }
}

console.log(product)
product.fun()

// convert javascript object to JSON(JSON does not allows functions)
const json=JSON.stringify(product)
console.log(json)

//convert JSON to JavaScript object
const obj=JSON.parse(json)
console.log(obj)

// const value change in object

const a={
    val:1,
}

const b={
    val:2,
}

// a=b;
 // here we try to change the reference of const variable so that's why it gives error of const assign


// a.val=b.val; 
// here we are not changing the reference but instead we change value present in that reference that's why it changes without any error.
console.log(a)

const c=a;
console.log(a==c) // here both a and c are pointing to same reference.
const d={
    val:1,
}
console.log(a==d) // here the reference is different for a and d although the object defination is same.

// const val=a.val
const {val}=a;  // Destructuring 
console.log(val)

const e={
    val,
}
console.log(e)