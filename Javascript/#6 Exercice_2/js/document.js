/**
 * EXERCICE 2
 * -------------------------------------
 */

// Attente du chargement du DOM
window.onload = function() {

    /**
     * Point 1
     */
    let changeStyle = document.querySelector("#changeStyle");
     // Ecouteur d'évènement au click sur le bouton
    changeStyle.addEventListener("click", changementDeStyle);

    /**
     * Point 2
     */
    let p = document.querySelector("p");
     // Ecouteur d'évènement au survol de la souris
    p.addEventListener("mouseenter", nouveauStyle);

    /**
     * Point 3
     */
    let changeText = document.querySelector("#changeText");
    changeText.addEventListener("click", changementTexte);

    /**
     * Point 4
     */
    let reset = document.querySelector("#reset");
    reset.addEventListener("click", remiseEnEtat);
}

// Change le texte en blanc et le fond en rouge
function changementDeStyle()
{
    let p = document.querySelector("p");
    p.style.backgroundColor = "red";
    p.style.color = "white";
}

// Change le texte en jaune et le fond en noir
function nouveauStyle()
{
    let p = document.querySelector("p");
    p.style.backgroundColor = "black";
    p.style.color = "yellow";
}

// Change le texte
function changementTexte()
{
    let p = document.querySelector("p");
    p.innerText = "Voici mon nouveau texte, wesh !";
}

// Remet le tout par défaut
function remiseEnEtat()
{
    let p = document.querySelector("p");
    p.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo iure sit, aut sunt repellendus, dolore, voluptate officia nemo tempore totam ab maxime incidunt nam.";
    p.style.backgroundColor = "transparent";
    p.style.color = "black";
}