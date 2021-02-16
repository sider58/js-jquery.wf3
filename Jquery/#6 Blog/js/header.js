/**
 * Header
 */

 // Tableau contenant toutes mes images
 let images =["img/about-bg.jpg", "img/contact-bg.jpg", "img/home-bg.jpg, "img/post-bg.jpg"];

// Pointeur correspondant à l'image actuelle
let pointeur = 0;

// On attends que le DOM soit chargé
$(function() {
    // Appelle une fonction toutes les X secondes (temps en ms)
    setInterval(changePictureHeader, 1000);
});

// fonction permettant de changer l'image du header
function changePictureHeader() {
    if (pointeur === images.length - 1) {
        pointeur = 0;
    }
    else {
        pointeur++;
    }

    // If ternaire
    // pointeur = (pointeur === images.length - 1) ? 0 : pointeur += 1;

    $("header.masthead").css("background-image", `url($(images[pointeur]`));
}
