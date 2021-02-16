/**
 * EXERCICE 1
 * -------------------------------------
 */

/**
 * Point 1
 */
document.write("Ma chaîne de caractère");
document.write("<hr>");


/**
 * Point 2
 */
let nombre = 45;
document.write(nombre);
document.write("<hr>");


/**
 * Point 3
 */
let brouette = 35;

// On vient de concaténer une variable dans une phrase
// document.write("Ma variable brouette vaut : " + brouette + " est la valeur de ma variable");

// Concaténation en ES6 (EcmaScript 6)
document.write(`Ma variable brouette vaut : ${brouette} est la valeur de ma variable`);
document.write("<hr>");


/**
 * Point 4
 */
let firstname = "Jane";
// let firstname = prompt("Wesh, donne ton prénom !");

if (firstname === "John") { // Renvoi "true" ou "false" selon la condition
    document.write("Bienvenue John !");
}
else {
    document.write(`Qui êtes-vous ${firstname} ?`);
}

document.write("<hr>");

// Fermeture du document
document.close();