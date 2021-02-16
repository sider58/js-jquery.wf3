/**
 * VARIABLES
 */

/**
 * Mot clé "var" pour déclarer une variable
 * Le nom de la variable est libre, pas de caractères spéciaux, ni d'espaces
 * Le signe egal "=" est un opérateur d'affection
 * Le signe point-virugle ";" signale la fin d'une instruction
 */

/**
 * "var", mot clé permettant de déclarer une variable de manière globale,
 * donc accessible dans tout le programme en cours
 */
var nombre = 36; // nombre vaut 36 - Variable type "int" (integer)
var decimal = 12.67; // decimal vaut 12.67 - Variable de type "float"
var texte = "Ceci est un texte"; // texte vaut "Ceci est un texte" - Variable de type "string"
var booleen = true; // boolean vaut "true" - Variable de type "bool" ou "boolean" - Autre valeur possible : false

/**
 * "let", mot clé permettant de déclarer une variable de manière bloc, 
 * donc accessible uniquement dans la partie de code dans laquelle elle est créée
 */
// let nombre = 36;


// Affiche un message d'information
console.log("Ceci est un message d'information !");

// Affiche un message d'erreur
console.error("Ceci est un message d'erreur !");

// Affiche un message d'alerte
console.warn("Ceci est un message d'alerte !");

// Affiche la valeur de la variable "nombre"
console.log(nombre); // Affiche 36, la valeur actuelle de la variable "nombre"

// Affecte une nouvelle valeur à la variable "nombre"
nombre = 26;

console.log(nombre); // Affiche 26, la nouvelle valeur de la variable "nombre"



/**
 * OPERATEURS DE CALCUL
 */

 // Faire une addition
 // Ajouter 10 à ma variable "nombre"
 nombre = nombre + 10;

 console.log(nombre); // Affiche 36

 // Faire une soustraction
 nombre = nombre - 6;

 console.log(nombre); // Affiche 30

 // Faire une multiplication
 nombre = nombre * 2;

 console.log(nombre); // Affiche 60

 // Faire une division
 nombre = nombre / 2;

 console.log(nombre); // Affiche 30

 // Faire un modulo
 nombre = nombre % 2;

 console.log(nombre); // Affiche 0


 // Forme "courte" des différentes opérations du dessus
 // A utiliser lors d'un calcul sur une même variable
 nombre += 10; // Equivalent de "nombre = nombre + 10;"
 nombre -= 6;
 nombre *= 2;
 nombre /= 2;
 nombre %= 2;

// Incrémentation & décrémentation
/**
 * Incrémentation, ajoute 1 à la variable nombre,
 * équivalent à : "nombre = nombre + 1" ou "nombre += 1"
 */
nombre++

/**
 * Décrémentation, enlève 1 à la variable nombre,
 * équivalent à : "nombre = nombre - 1" ou "nombre -= 1"
 */ 
nombre--;



/**
 * CONDITIONS
 */

// if... else
/**
 * if (condition) {
 *      // Le code ici sera exécuté si la condition est vraie
 * }
 * else {
 *      // Le code ici sera exécuté si la condition est fausse
 * }
 */

 // La comparaison s'effectue toujours de gauche à droite
 if (nombre === 0) {
    console.log("Oui, ton nombre est supérieur à zéro");
 }
 else {
    console.log("Désolé, il est égal ou inférieur à zéro");
 }

// Opérateurs de comparaison
/**
 * Supérieur à : >
 * Supérieur ou égal à : >=
 * Inférieur à : <
 * Inférieur ou égal à : <=
 * 
 * Egal à : == (Compare la valeur de deux éléments)
 * Strictement égal à : === (Compare la valeur et le type de deux éléments)
 * 
 * Différent de : != (Compare la valeur de deux éléments)
 * Strictement différent de : !== (Compare la valeur et le type de deux éléments)
 */

 /**
  * Un seul "if()", un seul "else", mais pas de limite pour les "else if()"
  * "else", toujours en dernier
  * "if()", toujours en premier
  */
if (nombre > 0) {
    console.log("Oui, ton nombre est supérieur à zéro");
}
else if(nombre === 0) {
    console.log("Oui, ton nombre est strictement égal à zéro");
}
else {
    console.log("Désolé, il est égal ou inférieur à zéro");
}

// "||" veut dire "OU"
// Sous Mac : Options + Maj + L
// Sous Win : AltGr + 6
if (nombre > 0 || nombre === 0) {
    console.log("Oui, ton nombre est supérieur ou strictement égale à zéro");
}
else {
    console.log("Désolé, il est égal ou inférieur à zéro");
}

// "&&" veut dire "ET"
/* if (nombre > 0 && nombre === 0) {
    console.log("Oui, ton nombre est supérieur ou strictement égale à zéro");
}
else {
    console.log("Désolé, il est égal ou inférieur à zéro");
} */


/**
 * INTERAGIR AVE L'UTILISATEUR
 */

// Boite d'alerte
// alert("Ceci est un message d'alerte");

// Boite de choix (Valider ou Annuler)
// confirm("Êtes-vous sûr de vouloir supprimer cette photo ?");
/* if (confirm("Êtes-vous sûr de vouloir supprimer cette photo ?")) {
    console.log("Il supprime sa photo !");
}
else {
    console.log("Il a annulé la suppression de la photo");
} */

// Demande une valeur à l'utilisateur
// let prenom = prompt("Quel est ton prénom ?");
// console.log(prenom);


/**
 * LES BOUCLES
 */

// Boucle for()
// Incrémente de 1 à 10
/* for (let compteur = 1; compteur <= 10; compteur++) {
    console.log(compteur);
}

// Décrémente de 10 à 1
for (let compteur = 10; compteur >= 1; compteur--) {
    console.log(compteur);
} */


// Boucle while()
let compteur = 1;

while(compteur <= 10) {
    console.log(compteur);
    compteur++; // NE PAS OUBLIER !!!!!!!!!!!!!!!!
}


// Boucle do.. while()
// S'exécute au minimum une fois, même si la condition est fausse
let counter = 1;

do {
    console.log(counter);
    counter++; // NE PAS OUBLIER !!!!!!!!!!!!!!!!
} while(counter <= 10)
