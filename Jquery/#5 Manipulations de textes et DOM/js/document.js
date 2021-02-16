/**
 * MANIPULATION DU DOCUMENT
 * -------------------------------------
 */

// On attend que le DOM soit correctement chargé
// function() {} -> Fonction anonyme, fonction qui n'a pas de nom
window.onload = function() {

    // Ici, on est sûr que le DOM est chargé : Document Object Model

    // Sélectionner toutes les balises H1
    let balise1 = document.getElementsByTagName("h1");

    // Aperçu du contenu de la variable "balise1"
    console.log(balise1);

    // Sélectionner tous les éléments qui possèdent la classe CSS "ma_classe"
    let balise2 = document.getElementsByClassName("ma_classe");

    // Aperçu du contenu de la variable "balise2"
    console.log(balise2);

    // Sélectionner un élement via son ID
    let balise3 = document.getElementById("option1");

    // Aperçu du contenu de la variable "balise3"
    console.log(balise3);

    // Il va récupérer la première occurence trouvé de la page
    let balise4 = document.querySelector(".rouge");

    // Aperçu du contenu de la variable "balise4"
    console.log(balise4);

    // Sélectionner tous les occurences de la page
    let balise5 = document.querySelectorAll("li");

    // Aperçu du contenu de la variable "balise5"
    console.log(balise5);


    // Modifier son contenu, donc le texte
    balise4.innerText = "Ceci est mon nouveau texte !";

    // Modifier la couleur de fond
    balise4.style.backgroundColor = "#FF5500";
    // balise4.style.backgroundColor = "rgb(43, 124, 65)";
    // balise4.style.backgroundColor = "rgba(4, 124, 6, 0.8)";

    // Modifier la couleur du texte
    balise4.style.color = "white";

    // Ajouter une ou plusieurs classes CSS
    balise3.classList.add("vert", "btn", "btn-primary");

    // Supprimer une ou plusieurs classes CSS
    balise3.classList.remove("btn");

    /**
     * Ecouteur d'évènements
     */

     // Récupère le bouton ayant l'ID "viewAlert"
    let button = document.querySelector("#viewAlert");

    // On surveille le bouton grâce à un écouteur d'évènement et on
    // enclenche une fonction au moment d'un click sur celui-ci
    button.addEventListener("click", function() {
        console.log("Tu as cliqué sur le bouton ! Bien ouej !");

        // Créer un nouvel élément HTML - Ici une DIV
        let alert = document.createElement("div");

        // Ajoute un texte dans la DIV
        alert.innerText = "Ceci est un message d'alerte !";

        // Applique une classe CSS à ma DIV
        alert.classList.add("alerte-rouge");

        // before = Avant
        // after = Après
        // Insère mon nouvel élément HTML (DIV) avant le bouton
        button.before(alert);
    });


    // Sélection du bouton
    let button2 = document.querySelector("#viewAlertGreen");

    // Surveille si un clic sur le bouton est effectué
    // Appelle une fonction callback au moment du clic
    // ----
    // Fonction callback :
    // Une fonction de rappel (aussi appelée callback en anglais) est une fonction
    // passée dans une autre fonction en tant qu'argument
    button2.addEventListener("click", afficherAlerte);

}

function afficherAlerte()
{
    console.log("Ok !");

    let button = document.querySelector("#viewAlertGreen");
    let alert = document.querySelector(".alerte-verte");
    // alert.style.display = "block";

    let display = alert.style.display;
    if (display == "none") {
        alert.style.display = "block";
        button.innerText = "Cacher l'alerte";
    }
    else {
        alert.style.display = "none";
        button.innerText = "Afficher l'alerte";
    }
}