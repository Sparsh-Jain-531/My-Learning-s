// for of - Mainly used for arrays

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for(let i of arr) {
//     console.log(i)
// }

const greetings = "Hello world!"

// for(let i of greetings) {
//     console.log(i)
// }

// Maps

// const map = new Map();
// map.set('name', 'John');
// map.set('age', 30);
// map.set('city', 'New York')
// map.set('country', 'USA')

// console.log(map)

// for(let [key, value] of map){
//     console.log(`${key}: ${value}`)
// }

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); 
// }

// for in loop - mainly used for objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for(let i in myObject){
//     console.log(i, ':-', myObject[i])
// }

const programming = ["js", "rb", "py", "java", "cpp"]

// for(let i in programming){
//     console.log(`${i} :- ${programming[i]}`)
// }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function(i){
//     console.log(i);
// } )

// coding.forEach((i)=>{
//     console.log(i);
// })

// function print(i){
//     console.log(i);
// }

// coding.forEach(print);

// coding.forEach((item,index,arr)=>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((i)=>{
    console.log(i.languageName, i.languageFileName);
})

const obj={
    a:45,
    b:5,
    c:245,
    d:85,
}

for(let i=0;i<Object.keys(obj).length;i++){
    console.log("The marks of ",Object.keys(obj)[i]," is ",obj[Object.keys(obj)[i]])
}