function creerSalutation(nom){
    return function(){
        console.log("Bonjour" + nom + " !");
    };
}

const salutationAlice = creerSalutation("Alice");
const salutationBob = creerSalutation("Bob");


function creerSalutation(nom){
    return function(){
        console.log("Bonjour " + nom + " t'étais passé OU?");
    };
}
const salutationCharlie = creerSalutation("Charlie");




