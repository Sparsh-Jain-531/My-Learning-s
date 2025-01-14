const promiseOne=new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve("Promise 1 resolved");
    },1000)
})

promiseOne.then(function(){
    console.log("Promise 1 resolved then");
})




new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve("Promise 2 resolved");
    },1500)
}).then(function(){
    console.log("Promise 2 resolved then");
})





const promiseThree=new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username:"Sparsh",email:"sparsh@gmail.com"});
    },1800)
})

promiseThree.then(function(user){
    console.log(user);
})



const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(() => {
    const error=false;
    if(error){
        reject("Error");
    } else{
        resolve({username:"Snajay",email:"sanjay@gmail.com"});
    }
    }, 1900);
})

// use then and catch to handle promise

// promiseFour
// .then((user)=>{
//     return user;
// })
// .then((response)=>{
//     console.log(response.username);
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("Finally");
// })

// use async,await for handle promise

async function consumePromiseFour() {
    try {
       const response=await promiseFour;
       console.log(response.username);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Finally");
    }
}

consumePromiseFour()