const name = "sparsh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// String Interpolation - insert variables directly in template literal.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sparsh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   sparsh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sparsh.com/sparsh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

// Escape Sequence
// 1. \n => break line
// 2. \' => get single qoute
// 3. \"" => get double qoute