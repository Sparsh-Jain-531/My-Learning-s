const btn=document.querySelector(".btn");
console.log(btn)

btn.addEventListener("click",()=>{
    if(btn.innerHTML==="Subscribe"){
        btn.innerHTML="Subscribed";
    } else {
        btn.innerHTML="Subscribe";
    }
})
