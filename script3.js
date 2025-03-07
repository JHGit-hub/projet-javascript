// Utilisation de function

function preparerPate(){
    let reponse = prompt("As-tu péparer la pate? (oui/non)");
    if(reponse === "oui"){
    console.log("Oui, la pate est prête");
    return true;
    }
    console.log("La pate n'est pas prête!");
    return false;
};

function ajouterIngredients(){
    let reponse = prompt("As-tu ajouter les inghredients? (oui/non)");
    if(reponse === "oui"){
    console.log("Oui, les ingredients sont bien ajoutés");
    return true;
    }
    console.log("Non, ils ne sont pas ajoutés");
    return false;
}

function cuirePizza(){
    let reponse = prompt("As-tu mis la pizza au four? (oui/non)");
    if(reponse === "oui"){
    console.log("Oui, la pizza est dans le four");
    return true;
    }
    console.log("Non, elle n'y est pas");
    return false;
}

function fairePizza(nbpizza){
    console.log("Je pépare la pizza n" + nbpizza);

    if(!preparerPate()){
        console.log("La pate a pizza de la pizza numéro " + nbpizza +" n'espas faites");
        return;
    }

    if(!ajouterIngredients()){
        console.log("Les ingredients de la pizza numéro " + nbpizza +" ne sont pas ajouter");
        return;
    }

    if(!cuirePizza()){
        console.log("La pizza numéro " + nbpizza +" n'est pas dans le four");
        return;
    }

console.log("La pizza numéro " - nbpizza + " est prête!");   
}

for( let i = 1; i <= 3; i++){
    fairePizza(i);
}

console.log("Toutes les pizzas sont prêtes!");
