const clock=document.getElementById("clock");

setInterval(()=>{
    let date=new Date();
    clock.innerHTML=`<span>${date.toLocaleTimeString()}</span>`
},1000)