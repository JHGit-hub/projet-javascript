 //creation tableau

let prenom = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];


// remplissage tableau


let i = 0;
while( i<prenom.length ){
    let j = 0;
    while( j<prenom.length ){
        prenom[i][j] = prompt ("Donne moi un prénom pour la case de la ligne " + (i+1) + " et de la colonne " + (j+1));
        j++;
    };
    i++;
};


//affichage tableau

prenom.forEach(function(surname){
    console.log(surname);
});


// comment afficher en ligne avec des "|" ?