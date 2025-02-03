const nums=[1,2,3];
nums[nums.length-1]=99;
console.log(nums);

function getLastValue(arr){
  return arr[arr.length-1];
}
console.log(getLastValue(nums))
console.log(getLastValue(["hi","hello","good"]))

function swapArray(arr){
  let temp=arr[0];
  arr[0]=arr[arr.length-1];
  arr[arr.length-1]=temp;
  return arr;
}
console.log(swapArray([1,20,25,30,5]))
console.log(swapArray(["hi","hello","good"]))

const arr=nums.map((i)=>{
  return (i+1)
})
console.log(arr)

function add(arr,num){
  let newarr=[];
  for(let i=0;i<arr.length;i++){
    newarr.push(arr[i]+num)
  }
  return newarr
}

console.log(add([1,2,3],2))
console.log(add([1,2,3],3))
console.log(add([-2,-1,0,99],2))

function addArrays(arr1,arr2){
  let newArr=[];
  for(let i=0;i<arr1.length;i++){
    newArr.push(arr1[i]+arr2[i])
  }
  return newArr;
}

console.log(addArrays([1,1,2],[1,1,3]))
console.log(addArrays([1,2,3],[4,5,6]))

function countPositive(arr){
  let count=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
      count++;
    }
  }
  return count;
}

console.log(countPositive([1,-3,5]))
console.log(countPositive([-2,3,-5,7,10]))

function minMax(nums){
  let obj={
    min:0,
    max:0,
  }
  let min=nums[0]
  let max=nums[0]
  for(let i=1;i<nums.length;i++){
    if(nums[i]<min){
      min=nums[i]
    }
    if(nums[i]>max){
      max=nums[i];
    }
  }
  if(min == undefined && max==undefined){
    obj.min=null
    obj.max=null
    return obj
  }
  obj.min=min
  obj.max=max
  return obj;
}

console.log(minMax([1,-3,5]))
console.log(minMax([-2,3,-5,7,10]))
console.log(minMax([]))
console.log(minMax([3]))

function countWords(words){
    let result={};
    for(let i=0;i<words.length;i++){
        let word=words[i]
        if(result[word]){
            result[word]++
        } else {
            result[word]=1
        }
    }
    return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));

const str=["hello","world","search","goodbye","search"]

function search(str,para){
    for(let i=0;i<str.length;i++){
        if(str[i]===para){
            return i;
        }
    }
    return -1
}

console.log(search(str,"worldd"))

function removeEggs(arr){
    const newArr=[];
    const copy=arr.slice(0,arr.length)
    copy.reverse()
    let count=0;
    for(let i=0;i<copy.length;i++){
        if(count<2){
            if(copy[i]==="egg"){
                count++;
                continue;
            }
        }
        newArr.push(copy[i]);
    }
    return newArr.reverse()
}
const foods=["egg","apple","egg","egg","ham"]
console.log(removeEggs(foods))
console.log(foods)

let str1="";
for(let i=1;i<=20;i++){
    if(i%3===0 && i%5===0){
        str1+="FizzBuzz, "
    } else if(i%3===0){
        str1+="Fizz, "
    } else if(i%5===0){
        str1+="Buzz, "
    } else {
        str1+=`${i}, `
    }
}
console.log(str1)

function unique(arr){
    const newArr=[]
    for(let i=0;i<arr.length;i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(unique(["red","green","red","green","blue"]))

const addarrow=()=>{
    console.log(2+5)
}
addarrow()
addarrow()

function runTwice(fun){
    fun()
    fun()
}

runTwice(function(){console.log("12b")})
runTwice(addarrow)