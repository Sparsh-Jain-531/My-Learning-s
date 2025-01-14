// callback function------------------------------------------

function sum(a, b) {
    console.log(a+b);
}

function calculate(a,b,sumCallBack){
    sumCallBack(a,b);
}

calculate(1,2,sum)

// Callback Hell-------------------------------------------

function getData(dataiD,getNextData){
    setTimeout(() => {
        console.log("data: ",dataiD);
        if(getNextData){
            getNextData();
        }
    }, 100);
}

getData(1,()=>{
    console.log("Getting data 2......")
    getData(2,()=>{
        console.log("Getting data 3......")
        getData(3,()=>{
            console.log("Getting data 4......")
            getData(4,()=>{
                console.log("Getting data 5......")
                getData(5);
            })
        })
    })
})

// Promise----------------------------------------------------------

const getDataPromise=(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data of promise: ",data);
            resolve("success");
        },600)
    })
}

// Promise Chain----------------------------------------------------

getDataPromise(1)
.then((res)=>{
    return getDataPromise(2);
})
.then((res)=>{
    return getDataPromise(3);
})
.then((res)=>{
    return getDataPromise(4);
})
.then((res)=>{
    return getDataPromise(5);
})
.then((res)=>{
    console.log(res)
})


// Async-Await-----------------------------------------------------

const getDataPromiseAsync=(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data of Async promise: ",data);
            resolve("success");
        },4000)
    })
}

async function getDataAsync() {
    await getDataPromiseAsync(1);
    console.log("Geeting Data2 of Async...........")
    await getDataPromiseAsync(2);
    console.log("Geeting Data3 of Async...........")
    await getDataPromiseAsync(3);
    console.log("Geeting Data4 of Async...........")
    await getDataPromiseAsync(4);
    console.log("Geeting Data5 of Async...........")
    await getDataPromiseAsync(5);
}

// getDataAsync();


// Call By IIFE
(
    async function () {
        await getDataPromiseAsync(1);
        console.log("Geeting Data2 of Async...........")
        await getDataPromiseAsync(2);
        console.log("Geeting Data3 of Async...........")
        await getDataPromiseAsync(3);
        console.log("Geeting Data4 of Async...........")
        await getDataPromiseAsync(4);
        console.log("Geeting Data5 of Async...........")
        await getDataPromiseAsync(5);
    }
)();