/**
 * MANIPULATION DE TEXTES
 * -------------------------------------
 */

// Concaténation
console.log("Bon" + "jour");

let prenom = "Guillaume";
let ville = "Troyes";
let postal = "10000";

document.write("Bonjour " + prenom + ", tu habites à " + ville + " dont le code postal est " + postal);
document.write("<hr>");


// Concaténation en ES6
document.write(`Bonjour ${prenom}, tu habites à ${ville} dont le code postal est ${postal}`);
document.write("<hr>");

let texte = "The quick brown fox jumps over the lazy dog.";

// Récupère les 9 premiers caractères de la phrase
document.write(texte.slice(0, 9));
document.write("<hr>");

// Récupère à partir du 9ème caractères
document.write(texte.slice(9));
document.write("<hr>");

// Récupère une partie du milieu de la phrase
document.write(texte.slice(16, 25));
document.write("<hr>");

// Récupère les 9 derniers caractères
document.write(texte.slice(-9));