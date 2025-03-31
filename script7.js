let titre = document.querySelector("h1");

titre.style.color = "red";
titre.style.backgroundColor = "black";
titre.style.fontSize = "50px";

let parapgraphe = document.querySelector("p");
parapgraphe.innerText = "coucouc, je suis un nouveau texte! ";

parapgraphe.innerHTML = "<h2>coucou!<h2>";

titre.classList.add("toto");

if(titre.classList.contains("titi")){
    console.log("Titi est la!");
} else {
    console.log("Titi n'est pas la!");
}

let bouton = document.querySelector("button");

bouton.addEventListener("click",function(){
    alert("bouton cliquée!")
});

let carre = document.getElementById("carre");

carre.addEventListener("click",function(){
    if(carre.style.backgroundColor === "red"){
        carre.style.backgroundColor = "blue";
    }else{
        carre.style.backgroundColor = "red";
    }
});

let cercle = document.getElementById("cercle");

document.addEventListener("mousemove",function(event){
    cercle.style.left = event.clientX + "px";
    cercle.style.top = event.clientY + "px";
});