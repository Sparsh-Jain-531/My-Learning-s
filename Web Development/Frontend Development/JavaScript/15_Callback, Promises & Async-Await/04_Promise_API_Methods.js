let p1=new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise 1");
        // reject("Promise 1");
    }, 300);
})
let p2=new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise 2");
        // reject("Promise 2");
    }, 700);
})
let p3=new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise 3");
    }, 1000);
})

// let PromiseAll=Promise.all([p1,p2,p3])
// PromiseAll.then((value)=>{
//     console.log(value);
// })

let PromiseAll=Promise.allSettled([p1,p2,p3])
PromiseAll.then((value)=>{
    console.log(value);
})

// let PromiseAll=Promise.race([p1,p2,p3])
// PromiseAll.then((value)=>{
//     console.log(value);
// })

// let PromiseAll=Promise.any([p1,p2,p3])
// PromiseAll.then((value)=>{
//     console.log(value);
// })

// let PromiseAll=Promise.resolve(6)
// PromiseAll.then((value)=>{
//     console.log(value);
// })

// let PromiseAll=Promise.reject(new Error("error"))
// PromiseAll.then((value)=>{
//     console.log(value);
// })