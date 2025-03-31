let carreAA = document.getElementById("carreAA");
let carreBB = document.getElementById("carreBB");
let carreCC = document.getElementById("carreCC");

function reset() {
    carreAA.style.backgroundColor ="white";
    carreBB.style.backgroundColor ="white";
    carreCC.style.backgroundColor ="white";
}


carreAA.addEventListener("click",function(){
    reset();
    carreAA.style.backgroundColor ="blue";
})

carreBB.addEventListener("click",function(){
    reset();
    carreBB.style.backgroundColor ="blue";
})

carreCC.addEventListener("click",function(){
    reset();
    carreCC.style.backgroundColor ="blue";
});