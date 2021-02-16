/**
 * Validation du formulaire de contact
 */

// On attends que le DOM soit chargé
$(function() {
    /**
     * Écouteurs d'évènements
     */
    $("#name").on("change", checkName);
    $("#email").on("change", checkMail);
    $("#phone").on("change", checkPhoneNumber);
    $("#message").on("change", checkMessage);
});

// Vérifier la validité d'une adresse email avec une expression régulière
function isValidEmailAddress(emailAddress)
{
    let pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}

// Vérifier la validité d'un numéro de téléphone avec une expression régulière
function isValidPhoneNumber(phone)
{
    let pattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return pattern.test(phone);
}

// Fonction affichant un succès
function isSuccess(element)
{
    // Sélectionne le parent, soit la DIV juste au dessus
    // Je retire (si existante) la classe "border-danger"
    // J'applique des classes CSS sur l'élément parent
    element.parent().removeClass("border-danger").addClass("border-bottom border-success");

    // Vide l'élément suivant le champs texte en lui passant une chaîne de caractères vide
    element.next().html("");
}

// Fonction affichant une erreur
function isError(element, message)
{
    element.parent().removeClass("border-success").addClass("border-bottom border-danger");
    element.next().html(message);
}

// Vérification de l'adresse email
function checkMail()
{
    // Vérifier que l'adresse email soit correcte
    if (isValidEmailAddress($(this).val())) {
        isSuccess($(this));
    }
    else {
        isError($(this), "L'adresse email est invalide");
    }
}

// Vérification du numéro de téléphone
function checkPhoneNumber()
{
    // Vérifier que le numéro soit correct
    if (isValidPhoneNumber($(this).val())) {
        isSuccess($(this));
    }
    else {
        isError($(this), "Le numéro de téléphone est invalide");
    }
}

// Vérification du nom
function checkName()
{
    // Vérifier que le nom soit supérieur ou égal à 5
    if ($(this).val().length >= 5) {
        isSuccess($(this));
    }
    else {
        isError($(this), "Le nom doit contenir un minimum de 5 caractères");
    }

    // $(this).val().length >= 5 ? isSuccess($(this)) : isError($(this), "Le nom doit contenir un minimum de 5 caractères");
}

function checkMessage()
{
    // Vérifier que le message soit supérieur ou égal à 10
    if ($(this).val().length >= 10) {
        isSuccess($(this));
    }
    else {
        isError($(this), "Le message doit contenir un minimum de 10 caractères");
    }
}

