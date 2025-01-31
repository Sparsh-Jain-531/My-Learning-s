const btn=document.querySelector(".btn")
const btn1=document.querySelector(".btn1")
const inputElement=document.querySelector(".input-element")
const btn2=document.querySelector(".btn2")
const text=document.querySelector(".text")
const text1=document.querySelector(".text1")
const text2=document.querySelector(".text2")
const inputKey=document.querySelector(".input-key")

function choice(button){
    text.innerHTML=`You chose: ${button.innerText}`
}

function printName(){
    if(inputElement.value!==""){
        text1.innerHTML=`Your name is ${inputElement.value}`
    } else {
        text1.innerHTML="Please enter your name"
    }
}

btn.addEventListener("click",()=>{
    choice(btn)
})

btn1.addEventListener("click",()=>{
    choice(btn1)
})

btn2.addEventListener("click",()=>{
    printName()
})

inputElement.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        printName()
    }
})

inputKey.addEventListener("keydown",(e)=>{
    text2.innerHTML+=e.key
})