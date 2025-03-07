// Exerice 1

function achat(prixBonbon,argent){
    let argentManquant = prixBonbon - argent;
    if(argent >= prixBonbon){
        alert("Tu peux acheter le bonbon!")
        return true;
    }
    alert("Il te manque " + argentManquant + "€")
    return false;
}



//Exercie 2

let weather = prompt("Tu veux des conseils pour quel temps? (soleil/pluie/neige/vent)");
function conseilMeteo(weather){
    if(weather === "soleil"){
        alert("Mets de la créme solaire!")
    } else if (weather === "pluie"){
        alert("Prends ton parapluie!")
    } else if (weather === "neige"){
        alert("Mets une écharpe!")
    } else if (weather === "vent"){
        alert("T'envoles pas!")
    }
};
conseilMeteo(weather);


// Exercice 3

let weapon = prompt ("Bonjour, chevalier sans peur, choisis ton arme pour afronter le dragon (arc/épée)");

alert("Tu as choisi " + weapon);

function combattreDragon(){
    if(weapon === "épée"){
        alert("Tu attaque le dragon au corps à corps");
        let chance = Math.floor(Math.random()*100);
        alert("Ta chance est de " + chance + "%")
        if(chance >= 30){
            alert("Victoire, tu as pourfendu le Dragon!")
        } else if(chance < 30){
            alert("Quel malheur! Le dragon s'est fais un Mc Chevalier!")
        }
    } else if (weapon === "arc"){
        alert("Tu attaque le dragon a distance");
        let chance = Math.floor(Math.random()*100);
        alert("Ta chance est de " + chance + "%")
        if (chance >= 50){
            alert("Victoire, tu as pourfendu le Dragon!")
        } else if (chance < 50){
            alert("Quel malheur! Le dragon s'est fais un Mc Chevalier!")  
        }
    }
};

combattreDragon(weapon);