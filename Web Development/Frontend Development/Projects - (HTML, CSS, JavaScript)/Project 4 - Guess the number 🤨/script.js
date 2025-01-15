const random=parseInt(Math.random()*100+1);
const previousGuess=[];
let chances=9;

const userInput=document.getElementById("guessField");
const submit=document.getElementById("subt");
const showAnswer=document.querySelector(".lowOrHi");
const showChances=document.querySelector(".lastResult");

submit.addEventListener("click", ((e)=>{
    e.preventDefault();

    const input=parseInt(userInput.value);
    check(input)
    chances--;
}))

function validation(guess){
    if((guess.length<1 && guess.length>100) || isNaN(guess)){
        showAnswer.innerHTML="Please enter a number between 1 & 100"
    }
}
function check(guess){
    if(chances>0){
        if(guess<random){
            showAnswer.innerHTML="Number is too low"
            showChances.innerHTML=`${chances}`
            previousGuess.push(guess)
            document.querySelector(".guesses").innerHTML=`${previousGuess}`
            console.log(previousGuess)
        }
        else if(guess>random){
            showAnswer.innerHTML="Number is too high"
            showChances.innerHTML=`${chances}`
            previousGuess.push(guess)
            document.querySelector(".guesses").innerHTML=`${previousGuess}`
            console.log(previousGuess)
        } else{
            showAnswer.innerHTML="You guessed it!"
        }
    }
    else{
        showAnswer.innerHTML="Game Over!"
    }
}