let cal=document.querySelector(".calculate-button");
let inp=document.querySelector(".js-cost-input");
let btn=document.querySelector(".cart");
console.log(btn.classList.contains("cart"))

// let game=document.querySelector(".gaming");
// let music=document.querySelector(".music");
// let tech=document.querySelector(".tech");

// function changeColor(target) {
//     if(target.classList.contains("black")){
//         target.classList.remove("black");
//     } else {
//         target.classList.add("black");
//     }
// }

// game.addEventListener("click",()=>{
//     changeColor(game)
// })

// music.addEventListener("click",()=>{
//     changeColor(music)
// })

// tech.addEventListener("click",()=>{
//     changeColor(tech)
// })

const buttons=document.querySelectorAll(".gaming, .music, .tech");

const changeColor=(target)=>{
    buttons.forEach((btn)=>{
        btn.classList.remove("black")
    })
    target.classList.add("black")
}

buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        changeColor(btn);
    })
})

function handleCostKeydown(event) {
    if (event.key === 'Enter') {
      calculateTotal();
    }
  }

  function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);

    if(cost < 0) {
        const input=document.querySelector('.js-total-cost')
        input.innerHTML = `Error: cost cannot be less than $0`;
        input.classList.add("red")
        return;
    }

    if(cost === 0){
        const input=document.querySelector('.js-total-cost')
        input.innerHTML = `Error: Please enter some cost`;
        input.classList.add("red")
        return;
    }

    if (cost < 40) {
      cost = cost + 10;
    }
    const input=document.querySelector('.js-total-cost')
    input.innerHTML = `$${cost}`;
    input.classList.remove("red")
  }

  cal.addEventListener("click",()=>{
    calculateTotal()
  })

  inp.addEventListener("keydown",(event)=>{
    handleCostKeydown(event)
  })