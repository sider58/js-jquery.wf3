/**
 * PLUS OU MOINS
 */

/**
 * Demander à un utilisateur un nombre.
 * Comparer ce nombre à un nombre choisi aléatoirement par le programme.
 * Selon la différence entre les deux nombres, afficher un message afin de le guider :
 *  - "Ton nombre est trop grand"
 *  - "Ton nombre est trop petit"
 * 
 * Si celui-ci, trouve le bon nombre, afficher un message de succès !
 */

// Génération d'un nombre aléatoire
let response;
let random_number = Math.floor(Math.random() * 10) + 1;
console.log(random_number);

// Excécute au minimum un fois le code dans do{} avant de vérifier si
// le nombre aléatoire est différent du nombre choisis par l'utilisateur
do {
    // Demande d'un nombre au joueur
    response = prompt("Trouve le bon nombre entre 1 et 100 !");

    if (response < random_number) {
        console.log("Le nombre a trouver est plus grand");
    }
    else if (response > random_number) {
        console.log("Le nombre a trouver est plus petit");
    }
    else {
        console.log("Bravo tu as gagné ! ;)");
    }

} while(random_number != response) // Vérifie si le nombre est différent
