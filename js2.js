function invisible() {
    let hamburger = document.querySelector(".menu")
    let menu = document.querySelector(".menu2")
    hamburger.addEventListener("click", ()=>{
        if (document.querySelector(".info").style.display == "none") {
            document.querySelector(".info").style.display = "block"
        }else {
            document.querySelector(".info").style.display = "none"
        }
    }) 
}
invisible()

let input = document.querySelector(".input");
let a = document.querySelectorAll(".a");
let b = Array.from(a);
let maths = document.querySelectorAll(".math");
let string = "";

b.forEach((e)=>{
    e.addEventListener("click", (ee) => {
        if(ee.target.innerHTML == "="){
            string = eval(string);
            input.innerHTML = string;
        } else if(ee.target.innerHTML == "AC"){
            string = "";
            input.innerHTML = string
        } else if(ee.target.innerHTML == "C"){
            string = string.slice(0, -1);
            input.innerHTML = string
        } else {
            string = string + ee.target.innerHTML;
            input.innerHTML = string;
        }
    })
})

Array.from(maths).forEach((z) => {
    z.addEventListener("click", (zz) =>{
        if(zz.target.innerHTML == "pi"){
            string = 3.141592653
            input.innerHTML = string;
        } else{
            let x = eval(input.value);
            x = x * Math.PI / 180;
            input.value = Math.sin(x);
            string = input.value
            console.log(string);
            
        }
    })
})