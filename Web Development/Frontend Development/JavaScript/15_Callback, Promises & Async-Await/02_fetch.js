// async function getAllUsers() {
//     try {
//         const response=await fetch("https://jsonplaceholder.typicode.com/users");
//         const data=await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Finally");
})

// Fetch promise has more priority than other promises(settimeout, setinterval, etc.) as it stores in micro-task queue.