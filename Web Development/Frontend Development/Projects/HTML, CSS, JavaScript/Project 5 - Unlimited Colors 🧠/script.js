const hex="0123456789ABCDEF";

let color="#";

const generateColor=()=>{
    for(let i=1;i<=6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
}

let startinterval;
let stopinterval;

function startChanging(){
    startinterval=setInterval(() => {
    generateColor();
    document.body.style.background=color;
    color="#"
    }, 1000);
}

function stopChanging(){
    clearInterval(startinterval);
}

const start=document.getElementById("start").addEventListener("click",startChanging)
const stop=document.getElementById("stop").addEventListener("click",stopChanging)