é/**
 * CAROUSEL
 * -----------------------
 */

// Tableau de toutes mes images
let images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg"];

// Pointeur correspondant à l'image actuelle
let pointeur = 0;

// Variable pour le setInterval
let timer;

// Variable pour le loader
let loader;

// Attend que le DOM soit chargé
window.onload = function () {

    // Récupération d'éléments du DOM
    let content = document.querySelector("#content");
    let flecheDroite = document.querySelector("#avancer");
    let flecheGauche = document.querySelector("#reculer");
    let indicator = document.querySelector("#indicators");

    // Écouteurs d'évènements
    // ----------------------------------

    // Start/stop slide
    content.addEventListener("mouseover", stopCarousel);
    content.addEventListener("mouseout", startCarousel);

    // Flèche de droite
    flecheDroite.addEventListener("click", avancer);
    flecheDroite.addEventListener("mouseover", stopCarousel);
    flecheDroite.addEventListener("mouseout", startCarousel);

    // Flèche de gauche
    flecheGauche.addEventListener("click", reculer);
    flecheGauche.addEventListener("mouseover", stopCarousel);
    flecheGauche.addEventListener("mouseout", startCarousel);

    // Indicators
    // Boucle sur sur le tableau image afin de mettre autant d'indicateurs que d'images
    for (let i = 0; i < images.length; i++) {
        // Utiliser l'opérateur "+=" afin de d'associer plusieurs SVG
        // Ajout d'un attribut "data-index" contenant l'index du tableau en cours
        indicator.innerHTML += '<svg data-index="'+ i +'" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-circle mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>';
    }

    // Applique un écouteur d'évènement sur les SVG
    let indicators = document.querySelectorAll("#indicators svg");

    // Boucle sur tous les indicateurs contenu dans la DIV ayant l'ID "indicators"
    for (let i = 0; i < indicators.length; i++) {

        // Application d'un écouteur d'évènement sur chaque SVG
        indicators[i].addEventListener("click", indicatorChangeImage);
    }
    
    // ----------------------------------

    // "Virer" le loader
    loader = setInterval(closeLoader, 100);

    // Lancement du diaporama
    // timer = setInterval(avancer, 3000);
    startCarousel();
}

// Change l'image du slide selon l'indicateur cliqué
function indicatorChangeImage()
{
    // Récupération de la valeur contenu dans l'attribut "data-index"
    // et miet à jour la variable "pointeur"
    pointeur = this.dataset.index;

    // console.log(this, pointeur);

    // Récupération de la balise HTML "img" de la page HTML
    let image = document.querySelector("img");

    // Modification de l'attribut "src" en lui ajoutant la valeur "prochaine" de mon tableau
    // pointeur correspondan à un index du tableau "images"
    image.setAttribute("src", images[pointeur]);
}

// Ferme le loader
function closeLoader()
{
    let spinner = document.querySelector("#loader");
    spinner.style.display = "none";
    clearInterval(loader);
}

// Démarre le carousel
function startCarousel()
{
    timer = setInterval(avancer, 3000);
}

// Stop le carousel
function stopCarousel()
{
    clearInterval(timer);
}

// "Avance" dans le carousel
function avancer()
{
    // Je vérifie si l'index de mon pointeur est égal à l'index final de mon tableau
    if (pointeur == images.length - 1) {
        // Si oui, je réinitialise mon pointeur
        pointeur = 0;
    }
    else {
        // Sinon, j'incrémente celui-ci de 1
        pointeur++;
    }

    // Récupération de la balise HTML "img" de la page HTML
    let image = document.querySelector("img");

    // Modification de l'attribut "src" en lui ajoutant la valeur "prochaine" de mon tableau
    // pointeur correspondan à un index du tableau "images"
    image.setAttribute("src", images[pointeur]);
}

// "Recule" dans le carousel
function reculer()
{
    // Si le pointeur est égal à zéro 
    if (pointeur == 0) {
        // Alors je met à jour l'index du pointeur en lui donnant le dernier index du tableau
        pointeur = images.length - 1;
    }
    else {
        // Sinon, je décrémente de 1
        pointeur--;
    }

    // Récupération de la balise HTML "img" de la page HTML
    let image = document.querySelector("img");

    // Modification de l'attribut "src" en lui ajoutant la valeur "prochaine" de mon tableau
    // pointeur correspondan à un index du tableau "images"
    image.setAttribute("src", images[pointeur]);
}