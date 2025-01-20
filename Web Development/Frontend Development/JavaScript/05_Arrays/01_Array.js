// array

// const myArr = [0, 1, 2, 3, 4, 5]

// const stringMyArr=myArr.toString(); // covert array to string
// console.log(stringMyArr, typeof stringMyArr)

// const joinMyArr=myArr.join(" and ") //Joins and covert array to string
// console.log(joinMyArr, typeof joinMyArr)

// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);



// SUMMARRY:

// 1. Array is written in brackets [  ].
// 2.Array data type is an object.
// 3.Array can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive (refrence) type.

// ARRAY METHODs :

// 1.Push = adds value to last of an array and return length of the updated array.
// 2. Pop = removes last value of an array and return that element.
// 3. Unshift = adds value at first of an array return length of the updated array.
// 4.Shift = removes first value of an array and return that element..
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// 8. Slice(start index from where you want array values, end index upto which you want values{entered index does not include})= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// slice() does not manupulate main array.
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.
// splice() manupulate original array.

let num1=[1,2,3,4,5,6]
let num2=[7,8,9,10,11,12]
let num3=[13,14,15,16,17,18,19,20]

let ans=num1.concat(num3,num2)
console.log(ans)

const compare=(a,b)=>{
    return (a-b);
}

// ans.sort() // it sort the array albhabetically by considering it data as string.

ans.sort(compare)
console.log(ans)

// ans.reverse()
// console.log(ans)

// ans.splice(2,4)
// console.log(ans)

const newarr=ans.slice(2,8)
console.log(newarr)