// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const nums=myNums.filter((i) => {
//     return i>4;
// })

// console.log(nums);

// const numstwo=[];

// myNums.forEach((i)=>{
//     if(i>4){
//         numstwo.push(i);
//     }
// })

// console.log(numstwo);


// Filter---------------------------------------------

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userbooks=books.filter((i)=>{
//     return i.genre==='Fiction'
//   })

// const userbooks=books.filter((i)=>{
//     return (i.genre==='Fiction' && i.publish>=1985)
//   })

//   console.log(userbooks);


// Map------------------------------------

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const ans=myNumers.map((i)=>{
//     return i*10;
// })

// chaining of methods
// const ans=myNumers
// .map((i)=>i*10)
// .map((i)=>i+1)
// .filter((i)=>i>40)

// console.log(ans)

// Reduce--------------------------------------------

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal=myNums.reduce((a,c)=>{
//     return a+c;
// },0);
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 1999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay=shoppingCart.reduce((a,c)=>{
    return a+c.price;
},0)

console.log(priceToPay);