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

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("Finally");
// })

// Fetch promise has more priority than other promises(settimeout, setinterval, etc.) as it stores in micro-task queue.

// POST Request using fetch
const createTodo = async (todo) => {
    let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title: 'sparsh',
                body: 'bhai2',
                userId: 1100,
        }),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()   
    console.log(response)
    return response
}
createTodo()

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    console.log(r)
    return r
}
getTodo(10)