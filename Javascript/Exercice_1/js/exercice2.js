/**
 * EXERCICE 2
 * -------------------------------------
 */

let age = 24;
let sexe = 'féminin';

// Vérifie si la personne est une femme
if (sexe === 'féminin') {

    // Vérifie si la personne à bien entre 21 et 40 ans
    if (age >= 21 && age <= 40) {
        document.write("Bienvenue !!");
    }
    // Sinon, on affiche un message d'avertissement !
    else {
        document.write("Navré, vous n'êtes pas dans la bonne tranche d'âge :(");
    }
}
// Sinon, message d'avertissement !
else {
    document.write("Désolé, pas de messieurs ici !");
}

document.write("<hr>");
document.close();