/**
 * EXERCICE 3
 * -------------------------------------
 */

// On attend que le DOM soit chargé
window.onload = function() {

    // Ajout d'un écouteur d'évènement sur le champ "pseudo"
    let pseudo = document.querySelector("#pseudo");
    pseudo.addEventListener("change", verifPseudo);

    // Ajout d'un écouteur d'évènement sur le champ "email"
    let email = document.querySelector("#email");
    email.addEventListener("change", verifEmail);

    // Ajout d'un écouteur d'évènement sur le champ "password"
    let password = document.querySelector("#password");
    password.addEventListener("change", verifPassword);

    // Ajout d'un écouteur d'évènement sur le champ "password" de confirmation
    let confirmPassword = document.querySelector("#confirm_password");
    confirmPassword.addEventListener("change", verifConfirmPassword);

    // Ajout d'un écouteur d'événement sur les icônes "eyes"
    let eyes = document.querySelectorAll(".bi-eye");

    // Boucle afin de lire le contenu de mon tableau d'éléments "eyes"
    for(let i = 0; i < eyes.length; i++) {
        // Applique un écouteur d'événements sur un élément
        eyes[i].addEventListener("click", clickEye);
    }
}

// Affiche/masque le mot de passe contenu dans le champs texte
function clickEye()
{
    let input = this.nextElementSibling;

    if (input.getAttribute("type") == "password") {
        input.setAttribute("type", "text"); // <input type="text" id="password">
    }
    else {
        input.setAttribute("type", "password"); // <input type="password" id="password">
    }
}

// Vérification de la confirmation du mot de passe
function verifConfirmPassword()
{
    // Vérifie que la confirmation du mot de passe soit bien le même
    // que le mot de passe
    // if ("secret" === "secre") {}
    let confirmPassword = document.querySelector("#confirm_password");
    if (confirmPassword.value === password.value) {
        // Application d'une bordure verte sur le champs input
        confirmPassword.style.borderColor = "green";

        // Supprime le noeud suivant
        // C'est-à-dire, l'élément "p" représentant l'erreur
        if (confirmPassword.nextElementSibling != null) {
            confirmPassword.nextElementSibling.remove();
        }
    }
    else {
        // Sélectionne l'élément "p" contenant l'erreur, si existant
        // Sinon, renvoi "null"
        let errorConfirmPassword = document.querySelector("#errorConfirmPassword");

        // Vérifie que "errorConfirmPassword" soit égal à "null"
        // C'est-à-dire que l'élément "p" n'existe pas
        if (errorConfirmPassword == null) {

            // Application d'une bordure rouge sur le champ input
            // si la confirmation du mot de passe est différent du mot de passe
            confirmPassword.style.borderColor = "red";

            // Création d'un nouvel élément HTML "p"
            let baliseP = document.createElement("p");

            // Ajoute un ID à mon élément
            baliseP.id = "errorConfirmPassword";

            // Ajouter du texte dans la balise "p" créé précédemment
            baliseP.innerText = "Les mots de passe ne correspondent pas";

            // Définit le couleur du texte en rouge
            baliseP.style.color = "red";

            // Ajoute le nouvel élément après mon champ texte
            confirmPassword.after(baliseP); 
        }
    }
}

// Vérification du mot de passe
function verifPassword()
{
    // Vérifier que le mot de passe est plus de 6 caractères
    if (password.value.length >= 6) {
        
        // Application d'une bordure verte sur le champ input
        password.style.borderColor = "green";

        // Supprime le noeud suivant
        // C'est-à-dire, l'élément "p" représentant l'erreur
        if (password.nextElementSibling != null) {
            password.nextElementSibling.remove();
        }
    }
    else {
        // Sélectionne l'élément "p" contenant l'erreur, si existant
        // Sinon, renvoi "null"
        let errorPassword = document.querySelector("#errorPassword");

        // Vérifie que "errorPassword" soit égal à "null"
        // C'est-à-dire que l'élément "p" n'existe pas
        if (errorPassword == null) {

            // Application d'une bordure rouge sur le champ input
            // si le password est inférieur à 6 caractères
            password.style.borderColor = "red";

            // Création d'un nouvel élément HTML "p"
            let baliseP = document.createElement("p");

            // Ajoute un ID à mon élément
            baliseP.id = "errorPassword";

            // Ajouter du texte dans la balise "p" créé précédemment
            baliseP.innerText = "Le mot de passe doit comporter au minimum 6 caractères";

            // Définit le couleur du texte en rouge
            baliseP.style.color = "red";

            // Ajoute le nouvel élément après mon champ texte
            password.after(baliseP); 
        }
    }
}

// Fonction permettant de vérifier la validité syntaxique d'une adresse email
function checkEmail(email)
{
    // Expression régulière ou Regex !
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Vérification de l'email
function verifEmail()
{
    if (checkEmail(email.value)) {
        
        // Afficher une bordure verte autour du champ texte
        email.style.borderColor = "green";

        // Supprime le noeud suivant
        // C'est-à-dire, l'élément "p" représentant l'erreur
        if (email.nextElementSibling != null) {
            email.nextElementSibling.remove();
        }
    }
    else {
        // Sélectionne l'élément "p" contenant l'erreur, si existant
        // Sinon, renvoi "null"
        let errorEmail = document.querySelector("#errorEmail");

        // Vérifie que "errorEmail" soit égal à "null"
        // C'est-à-dire que l'élément "p" n'existe pas
        if (errorEmail == null) {

            // Application d'une bordure rouge sur le champ input
            // si le l'email est invalide
            email.style.borderColor = "red";

            // Création d'un nouvel élément HTML "p"
            let baliseP = document.createElement("p");

            // Ajoute un ID à mon élément
            baliseP.id = "errorEmail";

            // Ajouter du texte dans la balise "p" créé précédemment
            baliseP.innerText = "L'adresse email est incorrecte";

            // Définit le couleur du texte en rouge
            baliseP.style.color = "red";

            // Ajoute le nouvel élément après mon champ texte
            email.after(baliseP);
        }
    }
}

// Vérification du pseudonyme
function verifPseudo()
{
    // Vérifier que le pseudo est plus de 5 caractères
    if (pseudo.value.length >= 5) {
        
        // Application d'une bordure verte sur le champ input
        pseudo.style.borderColor = "green";

        // Supprime le noeud suivant
        // C'est-à-dire, l'élément "p" représentant l'erreur
        if (pseudo.nextElementSibling != null) {
            pseudo.nextElementSibling.remove();
        }
    }
    else {

        // Sélectionne l'élément "p" contenant l'erreur, si existant
        // Sinon, renvoi "null"
        let errorPseudo = document.querySelector("#errorPseudo");

        // Vérifie que "errorPseudo" soit égal à "null"
        // C'est-à-dire que l'élément "p" n'existe pas
        if (errorPseudo == null) {

            // Application d'une bordure rouge sur le champ input
            // si le pseudo est inférieur à 5 caractères
            pseudo.style.borderColor = "red";

            // Création d'un nouvel élément HTML "p"
            let baliseP = document.createElement("p");

            // Ajoute un ID à mon élément
            baliseP.id = "errorPseudo";

            // Ajouter du texte dans la balise "p" créé précédemment
            baliseP.innerText = "Le pseudonyme doit comporter au minimum 5 caractères";

            // Définit le couleur du texte en rouge
            baliseP.style.color = "red";

            // Ajoute le nouvel élément après mon champ texte
            pseudo.after(baliseP); 
        }
    }
}