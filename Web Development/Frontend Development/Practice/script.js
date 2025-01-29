function greet(name){
    if(name){
        console.log(`Hello, ${name}!`);
    } else {
        console.log(`Hello, there`);
    }
}
greet("sparsh jain")
greet()

function temp(deg){
    return (deg*9/5)+32;
}
console.log(temp(25))

function temp1(deg){
    return (deg-32)*5/9;
}
console.log(temp1(86))

function temperature(deg,unit){
    if(unit==="c"){
        return (deg*9/5)+32+"F";
    } else if(unit==="f"){
        return (deg-32)*5/9+"C";
    } else {
        return "Invalid unit";
    }
}

console.log(temperature(25,"c"))
console.log(temperature(86,"f"))
console.log(temperature(86,"d"))

function convertLength(length, from, to){
    if(from==="miles" && to==="km"){
        return length*1.6+" "+to;
    } else if(from==="km" && to==="miles"){
        return length/1.6+" "+to;
    } else if(from==="km" && to==="ft"){
        return length*3281+" "+to;
    } else if(from==="miles" && to==="ft"){
        return length*5280+" "+to;
    } else if(from===to){
        return length+" "+to;
    } else {
        return "Invalid unit";
    }
}

console.log(convertLength(50,"miles","km"))
console.log(convertLength(32,"km","miles"))
console.log(convertLength(50,"km","km"))

console.log(convertLength(5,"miles","km"))
console.log(convertLength(5,"miles","ft"))
console.log(convertLength(5,"km","ft"))
