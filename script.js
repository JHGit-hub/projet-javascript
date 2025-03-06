// JEUX DU HERO


let nbtraining = prompt("Combien d'entrainement veux-tu faire?");
const energyGain = 4;
let energy = 10;
let monster = 15;
const chest = 6;


 // entrainement

for (let training = 1; training <= nbtraining; training ++){
    alert("Entrainement n°" + training + " terminé");
    alert("Bravo! tu as gagné " + energyGain + " d'énergie");
    energy = energy + energyGain;
    if(training == nbtraining){
        alert("Bravo, tu as fini les entrainements, tu es prêt pour aller au combat")
        alert("tu as désormais " + energy + " d'énergie")
    }
}

 // combats
alert("Chaque combat réduira ton energie de 4 points")
let fight;

while(energy > 0){
    alert("Un ennemi se présente face à toi, il te reste " + energy + " d'énergie")
    let fight = prompt("Veux-tu engager le combat? Réponds oui ou non")
    if(fight === "oui"){
        alert("Victoire!")
        energy = energy - 6;
        monster --
    } else if (fight === "non" ){
        alert("Fuis pauvre lache");
        energy = 0
    }
    alert("Il reste " + monster + " ennemis à battre")
}
if(energy <=0 ){
    alert("Les combats sont terminés")
}
let victory = 15 - monster


 // loot


if (fight === "non" && victory <3 ){
    alert("Quel dommage,tu as abandonner le combat avant de pouvoir ouvrir des coffres")
    alert("Ton aventure est terminée")
}

if (victory >=3 ){
    alert("Félicitations! Tu as le droit de choisir 3 coffres parmis 6! Lesquels veux-tu ouvrir?")
    let allChest = ["rien", "une épée legendaire", "un bouclier légendaire", "un torse légendaire", "une potion de soins", "des piéces", "un ticket de tombola"];

    let chest1 = prompt ("Quel coffre on ouvre en premier?"); // choix coffre 1
    while (chest1>6 || chest1<=0 ){
        alert("Impossible, recommence");
        chest1 = prompt ("Quel coffre on ouvre en premier?")
    }
    alert("tu as choisi le coffre " + chest1)

    let chest2 = prompt ("Quel numéro on ouvre ensuite?"); // choix coffre 2
    while (chest2>6 || chest2<=0 || chest2 === chest1 ){
        alert("Impossible, recommence");
        chest2 = prompt ("Choisis un autre coffre entre 1 et 6 que tu n'as pas déjà ouvert") 
    }
    alert("Tu as choisi le coffre "+ chest2)

    let chest3 = prompt ("Quel coffre on ouvre en dernier?"); // choix coffre 3
    while(chest3>6 || chest3<=0 || chest3 === chest1 || chest3 === chest2){
        alert("Impossible, recommence");
        chest2 = prompt ("Choisis un autre coffre entre 1 et 6 que tu n'as pas déjà ouvert") 
    }
    alert("Tu as choisi le coffre "+ chest3)
    let loot = "Tu as gagné "
    let tresor = [allChest[chest1], allChest[chest2], allChest[chest3]] //loot
    for (let i=0; i < tresor.length; i++){
        loot = loot + tresor[i] + ", ";
    }
    alert(loot)
    /**
    tresor.forEach(function(loot){
        alert("Tu as gagné " + loot);
    }) **/
    alert("Ton aventure est terminée, pour le moment")
}
