/**
 * CAROUSEL
 * -----------------------
 */

 // Tableau de toutes mes images
 let images = document.querySelectorAll("img");
 // (images);

 // Pointeur correspondant à l'image actuelle
 let pointeur = 0;
 
 // Variable pour le setInterval
 let timer;
 
 // Attend que le DOM soit chargé
 window.onload = function () {
 
     // Lancement du diaporama
     timer = setInterval(avancer, 3000);
 
 }

 // "Avance" dans le diaporama
 function avancer()
 {
    // Ajoute la classe "d-none" pour cacher une image selon le pointeur
    images[pointeur].classList.add("d-none");
    
    // Je vérifie si l'index de mon pointeur est égal à l'index final de mon tableau
    if (pointeur == images.length - 1) {
        // Si oui, je réinitialise mon pointeur
        pointeur = 0;
    }
    else {
        // Sinon, j'incrémente celui-ci de 1
        pointeur++;
    }

    // Retire la classe "d-none" pour afficher une image selon le pointeur
    images[pointeur].classList.remove("d-none");
 }