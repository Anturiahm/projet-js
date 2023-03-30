"use strict";

const EST_AVANT = -1;
const EST_ÉGAL = 0;
const EST_APRES = 1;
const LOWER_GUESS_LIMIT = 0;
const UPPER_GUESS_LIMIT = 10;


function choisir_aléatoirement_un_nombre()
{
    return 4;
}

function isPropositionValid(prop)
{
    prop = Number.parseInt(prop, 10);
    if (!isNaN(prop)) {
        if (prop >= LOWER_GUESS_LIMIT && prop <= UPPER_GUESS_LIMIT) {
            return true;
        }
    }
    return false;
}

function faire_saisir_valeur()
{
    let message = `Quelle est votre proposition entre ${LOWER_GUESS_LIMIT} et ${UPPER_GUESS_LIMIT} ?`;
    let proposition = prompt(message);
    let isValid = isPropositionValid(proposition);
    while (isValid != true) {
        message = "Proposition invalide, nouvelle tentative :";
        proposition = prompt(message);
        isValid = isPropositionValid(proposition);
    }
    return proposition;
}

function comparer_valeurs(a, b)
{
    if (a < b) {
        return EST_AVANT;
    }
    if (a > b) {
        return EST_APRES;
    }
    return EST_ÉGAL;
}

function faire_deviner(nombre_à_deviner)
{
    let tentative_joueur = faire_saisir_valeur();
    let comparaison = comparer_valeurs(
        tentative_joueur,
        nombre_à_deviner
    );
    if (comparaison == EST_ÉGAL) {
        return true;
    }
    if (comparaison == EST_AVANT){
        console.log("Trop bas !");
    } else {
        console.log("Trop haut !");
    }
    return false;
}

function nombre_mystère()
{
    let nombre_secret = choisir_aléatoirement_un_nombre();
    let trouvé = false;
    while (trouvé != true) {
        trouvé = faire_deviner(nombre_secret);
    }
    console.log("tu as gagné !");

    return;
}

nombre_mystère();


console.log(
    document.querySelector('#userGuess')
);

document.querySelector('#userGuess').setAttribute('min', 5);

       // Version "débutant"
       let elt = document.querySelector('#guess');
       elt.classList.add("disabled");

       // Raccourci
       // /!\ peutplanter si pas d'élément avec l'id "name_age" sur la page
       document.querySelector('#name_age').classList.add("abled");

       // Version durcie
       elt = document.querySelector('#choice');
       if (elt != null) {
           elt.classList.add("disabled");
       }
