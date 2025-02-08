let random=parseInt(Math.random()*100+1);
let previousGuess=[];
let chances=10;

const userInput=document.getElementById("guessField");
const submit=document.getElementById("subt");
const showAnswer=document.querySelector(".lowOrHi");
const showChances=document.querySelector(".lastResult");
const startover=document.querySelector(".startover");
const guesses=document.querySelector(".guesses")
showChances.innerHTML=chances

submit.addEventListener("click", ((e)=>{
    e.preventDefault();
    chances--;
    const input=parseInt(userInput.value);
    check(input)
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
            previousGuess.push(guess)
            document.querySelector(".guesses").innerHTML=`${previousGuess}`
            console.log(previousGuess)
        }
        else if(guess>random){
            showAnswer.innerHTML="Number is too high"
            previousGuess.push(guess)
            document.querySelector(".guesses").innerHTML=`${previousGuess}`
            console.log(previousGuess)
        } else{
            showAnswer.innerHTML="You guessed it!"
        }
    }
    else{
        showAnswer.innerHTML="Game Over!";
        startover.innerHTML=`<button class="btn">Play Again!</button>`
        const btn=document.querySelector(".btn");
        btn.addEventListener("click",()=>{
            chances=10;
            previousGuess=[];
            random=parseInt(Math.random()*100+1);
            startover.innerHTML=""
        })
    }
    showChances.innerHTML=`${chances}`
}