let paragraphes = document.querySelectorAll("p");
let accordion1 = document.querySelector("#accordion1");
let accordion2 = document.querySelector("#accordion2");
let accordion3 = document.querySelector("#accordion3");
let button = document.querySelectorAll("button");

let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");

function reset(){
    p1.classList.add("hidden");
    p2.classList.add("hidden");
    p3.classList.add("hidden");
    accordion1.innerText = "Faire Apparaitre";
    accordion2.innerText = "Faire Apparaitre";
    accordion3.innerText = "Faire Apparaitre";
};

accordion1.addEventListener("click",function(){
    if(p1.classList.contains("hidden")){
        reset();
        p1.classList.remove("hidden");
        accordion1.innerText = "Cacher";
    } else {
        p1.classList.add("hidden");
        accordion1.innerText = "Faire apparaitre";
    };
});

accordion2.addEventListener("click",function(){
    if(p2.classList.contains("hidden")){
        reset();
        p2.classList.remove("hidden");
        accordion2.innerText = "Cacher";
    } else {
        p2.classList.add("hidden");
        accordion2.innerText = "Faire apparaitre";
    };
});

accordion3.addEventListener("click",function(){
    if(p3.classList.contains("hidden")){
        reset();
        p3.classList.remove("hidden");
        accordion3.innerText = "Cacher";
    } else {
        p3.classList.add("hidden");
        accordion3.innerText = "Faire apparaitre";
    };
});