const random=parseInt(Math.random()*100+1);
let previousGuess=[];
let chances=10;

const userInput=document.getElementById("guessField");
const submit=document.getElementById("subt");
const showAnswer=document.querySelector(".lowOrHi");
const showChances=document.querySelector(".lastResult");

submit.addEventListener("click", ((e)=>{
    e.preventDefault();

    const input=parseInt(userInput.value);
    check(input)
}))

function validation(guess){
    if((guess.length<1 && guess.length>100) || isNaN(guess)){
        showAnswer.innerHTML="Please enter a number between 1 & 100"
    }
}

function check(guess){
    if(guess<random){
        showAnswer.innerHTML="Number is too low"
        previousGuess += `${previousGuess}, `
        chances--;
        showChances.innerHTML=`${chances}`
    }
    else if(guess>random){
        showAnswer.innerHTML="Number is too high"
        previousGuess += `${previousGuess}, `
        chances--;
        showChances.innerHTML=`${chances}`
    } else{
        showAnswer.innerHTML="You guessed it!"
    }
}