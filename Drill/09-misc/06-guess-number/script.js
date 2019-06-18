let min=01;
let max=100;
let nombre = function () {
    let valeur = Math.floor((Math.random() * (max - min + 1) + min));
    return valeur;
    }
let nb = nombre();



let msg="Entrer un chiffre entre 01 et 100:";
let nbCoup=0;
let essai="";

function check(nb){
do
{
nbCoup++;
essai=prompt(`${msg} \n Essai numéro ${nbCoup}`);

if(essai<nb)
msg="Plus haut";

else
msg="Plus bas";
}


while(essai!=nb)
alert("Tu as gagné")
}
check(nb)
