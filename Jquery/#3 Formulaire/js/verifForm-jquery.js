/**
 * VERIFICATION DE FORMULAIRE - JQUERY
 * -------------------------------------
 */

// On attends que le DOM soit chargé
$(function() {

    // Écouteur d'évènement sur le champs "pseudo"
    // on() = addEventListener() en JS
    $("#pseudo").on("change", checkPseudo);

    // Écouteur d'évènement sur le champs "email"
    // on() = addEventListener() en JS
    $("#email").on("change", checkEmail);

    // Écouteur d'évènement sur le champs "password 1"
    $("#password").on("change", checkPassword);

    // Écouteur d'évènement sur le champs "password 2"
    $("#confirm-password").on("change", checkConfirmPassword);

    // Écouteur d'évènement sur les icônes ayant la classe CSS "bi-eye"
    // each() est une boucle dont la fonction anonyme, récupèrera de manière automatique chaque élément
    // contenu dans le tableau
    $(".bi-eye").each(function() {
        $(this).on("click", showHidePassword);
    });
});

// Change l'attribut du champs "password" en "text" et vice-versa
function showHidePassword()
{
    // Remonte tous les "parents" du SVG en s'arrêtant sur la DIV ayant la classe CSS "input-group-append"
    // prev() permet de sélectionner l'élément précédent cette DIV
    let input = $(this).parents("div.input-group-append").prev();

    // Modifier l'attribut du champs selon qu'il soit en "password" ou "text"
    input.attr("type", function(index, attr) {
        // if() ternaire
        // if (attr === "password") { return "text"; } else { return "password"; }
        return attr === "password" ? "text" : "password";
    });

    /* if (input.attr("type") == "password") {
        input.attr("type", "text");
    }
    else {
        input.attr("type", "password");
    } */
}

// Vérification du pseudo
function checkPseudo()
{
    // console.log($(this).val().length);

    // Vérifie si le pseudo est égal ou supérieur à 5 caractères
    if ($(this).val().length >= 5) {
        // Succès si la condition if() est vraie
        // Applique une bordure verte
        $(this).addClass("border border-success");

        // Retire l'élément HTML suivant le champs texte
        // next() = nextElementSibling() en JS
        $(this).next().remove();

        // Retire la classe qui affiche la bordure rouge
        $(this).removeClass("border-danger");
    }
    else {
        // Applique une bordure rouge
        $(this).addClass("border border-danger");

        // Vérifie qu'aucun élément HTML est présent après le champs texte
        // console.log($(this).next());
        if ($(this).next().length === 0) {
            // Affiche un message à l'utilisateur
            $(this).after("<small class=\"text-danger\">Le pseudonyme doit comporter au minimum 5 caractères</small>");
        }
    }
}

// Fonction permettant de vérifier la validité syntaxique d'une adresse email
function checkValidEmail(email)
{
    // Expression régulière ou Regex !
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Vérification de l'email
function checkEmail()
{
    // Vérifie si l'adresse email est valide
    if (checkValidEmail($(this).val())) {
        // Succès si la condition if() est vraie
        // Applique une bordure verte
        $(this).addClass("border border-success");

        // Retire l'élément HTML suivant le champs texte
        // next() = nextElementSibling() en JS
        $(this).next().remove();

        // Retire la classe qui affiche la bordure rouge
        $(this).removeClass("border-danger");
    }
    else {
        // Applique une bordure rouge
        $(this).addClass("border border-danger");

        // Vérifie qu'aucun élément HTML est présent après le champs texte
        // console.log($(this).next());
        if ($(this).next().length === 0) {
            // Affiche un message à l'utilisateur
            $(this).after("<small class=\"text-danger\">Votre adresse email est invalide</small>");
        }
    }
}

// Vérification du mot de passe
function checkPassword()
{
    // console.log($(this).val().length);

    // Vérifie si le mot de passe est égal ou supérieur à 6 caractères
    if ($(this).val().length >= 6) {
        // Succès si la condition if() est vraie
        // Applique une bordure verte
        $(this).addClass("border border-success");

        // Retire l'élément HTML suivant le champs texte
        // next() = nextElementSibling() en JS
        // Supprime l'élément HTML suivant l'élément parent de notre élément HTML actuel
        $(this).parent().next().remove();

        // Retire la classe qui affiche la bordure rouge
        $(this).removeClass("border-danger");
    }
    else {
        // Applique une bordure rouge
        $(this).addClass("border border-danger");

        // Vérifie qu'aucun élément HTML est présent après le champs texte
        // console.log($(this).next());
        // parent() = Prends l'élément HTML au dessus de celui en cours
        if ($(this).parent().next().length === 0) {
            // Affiche un message à l'utilisateur
            $(this).parent().after("<small class=\"text-danger\">Le mot de passe doit comporter au minimum 6 caractères</small>");
        }
    }
}

// Vérification de la confirmation du mot de passe
function checkConfirmPassword()
{
    // console.log($(this).val().length);

    // Vérifie si le mot de passe et sa confirmation sont égales
    if ($(this).val() === $("#password").val()) {
        // Succès si la condition if() est vraie
        // Applique une bordure verte
        $(this).addClass("border border-success");

        // Retire l'élément HTML suivant le champs texte
        // next() = nextElementSibling() en JS
        // Supprime l'élément HTML suivant l'élément parent de notre élément HTML actuel
        $(this).parent().next().remove();

        // Retire la classe qui affiche la bordure rouge
        $(this).removeClass("border-danger");
    }
    else {
        // Applique une bordure rouge
        $(this).addClass("border border-danger");

        // Vérifie qu'aucun élément HTML est présent après le champs texte
        // console.log($(this).next());
        // parent() = Prends l'élément HTML au dessus de celui en cours
        if ($(this).parent().next().length === 0) {
            // Affiche un message à l'utilisateur
            $(this).parent().after("<small class=\"text-danger\">Le mot de passe et sa confirmation ne correspondent pas</small>");
        }
    }
}