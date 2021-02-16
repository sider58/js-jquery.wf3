/**
 * LAZY LOAD
 * -------------------------
 */

window.onload = function() {
    window.addEventListener('scroll', lazyload);
    window.addEventListener('resize', lazyload);
}

function lazyload()
{
    // Récupération de toutes mes images
    let images = document.querySelectorAll('img');

    // Arrivé en ES5
    // Boucle qui agit sur un tableau de données ou d'éléments
    // Manipule ce tableau directement
    images.forEach(image => {
        // offsetTop = Renvoi la position de l'élément courant
        // innerHeight = Récupère la hauteur de la partie visible de la fenêtre de navigation
        // pageYOffset = Retourne le nombre de pixels de la page défiler verticalement
        if (image.offsetTop < window.innerHeight + window.pageYOffset) {
            image.src = image.dataset.src;
        }
    });
}
