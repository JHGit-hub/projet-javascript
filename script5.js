// Exercice vaisseau spatial


// equipage

let equipage = [
    {nom:"Han Solo", role:"pilote", niveau:"9", genre:"homme",age:"34", poids:"80",food:"omnivore"},
    {nom:"Chewbacca", role:"co-pilote", niveau:"8", genre:"indefini",age:"274", poids:"198",food:"omnivore"},
    {nom:"Leia", role:"commandant", niveau:"6", genre:"femme",age:"26", poids:"51",food:"vegan"},
    {nom:"Luke", role:"jedi", niveau:"6", genre:"homme",age:"26", poids:"77",food:"vegan"},
    {nom:"R2D2", role:"ingénieur", niveau:"7", genre:"android",age:"indefini", poids:"130",food:"indefini"},
    {nom:"C3-PO", role:"scientifique", niveau:"3", genre:"android",age:"indefini", poids:"110",food:"indefini"},
    {nom:"Thérèse", role:"medecin", niveau:"8", genre:"femme",age:"56", poids:"62",food:"omnivore"},   
];
alert("L'Équipage se compose ainsi; ")

for(let i = 0; i < equipage.length; i++){
    alert( equipage[i].nom + ", notre " + equipage[i].role +", de niveau " + equipage[i].niveau + ". Genre " + equipage[i].genre + " âgé(e) de " + equipage[i].age + " ans, pése " + equipage[i].poids + "kg, régime alimentaire " + equipage[i].food)
}

// ressource


let ressource = [{oxygene:"89", carburant:"6500", nourriture:"169", eau:"94", combinaison:"5"}];
alert("Nous avons dans notre soute; " + ressource[0].oxygene + "% d'Oxygéne, " + ressource[0].carburant + "L de carburant, " + ressource[0].nourriture + " rations journaliéres de Nourriture, " + ressource[0].eau + " ration journaliére d'Eau et " + ressource[0].combinaison + " combinaison spatiale pour l'équipage");


//check-list

function commandant(){
    let reponse = prompt("Est-ce que le commandant est présent? (oui/non)");
    if(reponse === "oui"){
        alert("Le commandant est à bord!");
        return true;
    }
    alert("Le commandant est absent!");
    return false;
}

function pilote(){
    let reponse = prompt("Est-ce que le pilote est présent? (oui/non)");
    if(reponse === "oui"){
        alert("Le pilote est à bord!");
        return true;
    }
    alert("Le pilote est absent!");
    return false;
}

function air(){
    let reponse = prompt("Combien avons nous d'oxygéne?");
    if(reponse >= 50){
        alert("Nous en avons plus de 50%!");
        return true;
    }
    alert("Moins que nécessaire");
    return false;
}

function fuel(){
    let reponse = prompt("Combien avons nous de carburant?");
    if(reponse >= 3000){
        alert("Nous en avons plus de 3000L!");
        return true;
    }
    alert("Moins que nécessaire");
    return false;
}

function ration(){
    let reponse = prompt("Combien avons nous de ration de nourriture?");
    if(reponse >= 150){
        alert("Nous en avons suffisament pour le voyage!");
        return true;
    }
    alert("Pas assez pour décoller!");
    return false;
}

function engineer(){
    let reponse = prompt("L'ingenieur est-il à bord? (oui/non)");
    if(reponse === "oui"){
        alert("Oui, l'ingénieur est bien à bord!");
        return true;
    }
    alert("Il est absent!");
    return false;
}

function doc(){
    let reponse = prompt("Le medecin est-il à bord? (oui/non)");
    if(reponse === "oui"){
        alert("Oui, le médecin est bien à bord!");
        return true;
    }
    alert("Il est absent!");
    return false;
}

function checkList(){
    alert("Verification de la Check-List");
    if(!commandant()){
        alert("Mission Annulé");
        return;
    }

    if(!pilote()){
        alert("Mission Annulé");
        return;
    }

    if(!air()){
        alert("Mission Annulé");
        return;
    }
    if(!fuel()){
        alert("Mission Annulé");
        return;
    }
    if(!ration()){
        alert("Mission Annulé");
        return;
    }
    if(!engineer() && !doc()){
        alert("Mission Annulé");
        return;
    };
alert("Décollage autorisé");
let compteARebours = 10;
    while(compteARebours > 0){
        alert(compteARebours);
        compteARebours--;
    };
alert("To MARS!!!!")
}
checkList();