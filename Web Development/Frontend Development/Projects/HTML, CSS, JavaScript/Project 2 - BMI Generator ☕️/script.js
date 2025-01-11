const form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const results=document.querySelector("#results")

    const area1=document.querySelector(".rangeone")
    area1.style.backgroundColor="";
    area1.style.color="";

    const area2=document.querySelector(".rangetwo")
    area2.style.backgroundColor="";
    area2.style.color="";
            
    const area3=document.querySelector(".rangethree")
    area3.style.backgroundColor="";
    area3.style.color="";

    if(height=="" || height<0 || isNaN(height)){
        results.innerHTML="<h1> Please Enter correct height!!! </h1>"
    } else if(weight=="" || weight<0 || isNaN(weight)){
        results.innerHTML="<h1> Please Enter correct weight!!! </h1>"
    } else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<h1> Your BMI is ${bmi}</h1>`;

        if(bmi<18.6){
            area1.style.backgroundColor="white";
            area1.style.color="black";
        } else if(bmi>18.6 && bmi<24.9){
            area2.style.backgroundColor="white";
            area2.style.color="black";
        } else{
            area3.style.backgroundColor="white";
            area3.style.color="black";
        }
    }
})