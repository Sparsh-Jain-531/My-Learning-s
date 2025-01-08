// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sparsh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Optional chaining
// Optional chaining (?.) is a feature in JavaScript that allows you to safely access deeply nested properties of an object without explicitly checking if each intermediate property exists. If a property is null or undefined, the optional chaining operator short-circuits and returns undefined instead of throwing an error.


// object optional chaining
const user = {
    profile: {
      name: "Alice",
    },
  };
  
  // Without optional chaining
  console.log(user.profile && user.profile.name); // "Alice"
  
  // With optional chaining
  console.log(user?.profile?.name); // "Alice"
  
  // If `profile` is undefined
  const userWithoutProfile = {};
  console.log(userWithoutProfile?.profile?.name); // undefined


// Array optional chaining
const userstwo = [{ name: "Alice" }, { name: "Bob" }];

// Accessing array element safely
console.log(userstwo?.[1]?.name); // "Bob"

// If the array is undefined or null
const noUsers = null;
console.log(noUsers?.[0]?.name); // undefined