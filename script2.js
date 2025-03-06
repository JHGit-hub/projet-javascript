// JEUX DU ZOO


let animaux = [
    {nom: "Tortue marine", espece: "Tortue", age: 62, enclos: "Zone océanique", nourriture: "algues" },
    {nom: "Tigre de Sibérie", espece:"Tigre", age: 11, enclos: "Zone Sibérienne", nourriture: "viandes"},
    {nom: "Panda Roux", espece: "Panda", age: 6, enclos: "Zone forêt asiatique", nourriture: "bambou" },
    {nom: "Grizlly", espece: "Ours", age: 23, enclos: "Zone montagneuse", nourriture: "poissons" },
    {nom: "Chat de gouttiére", espece: "chat", age: 7, enclos: "Zone urbaine", nourriture: "viandes" }
];

animaux.forEach(function(details){
    alert("Nous avons un(e) " + details.nom + " de la famille des " + details.espece + " agé(e) de " + details.age +" ans. Situé(e) dans la " + details.enclos + ", il(elle) se nourrit prinicpalement de " + details.nourriture + ".");
});


for(let k = 0; k < animaux.length; k++){
    if( animaux[k].nourriture === "viandes"  || animaux[k].nourriture === "poissons"){
        alert( "le(la) " + animaux[k].nom + " est un carnivore")
    }
};


for(let i = 0; i < animaux.length; i++){
    if( animaux[i].age >= 10 ){
        alert("Notre " + animaux[i].espece + " a " + animaux[i].age + " ans")
    }
}

animaux.forEach(function(habitat){
    alert("le(la) " + habitat.espece + " vie en " + habitat.enclos);
});

alert("les " + animaux[2].espece + " sont en danger, protegeons-les!");