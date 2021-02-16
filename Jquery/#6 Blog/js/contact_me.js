/**
* Validation de formulaire de contacte
*/

// On attend que le DOM soit chargé 
/**
 *  Ecouteurs d'eveneements
 */ 
$(function() {
    $("#name").on("change", checkName);
});

function isSuccess(element)
{   // Séléctionne le parent, soit la DIV juste au dessus
    // Je retire (si existante) la classe ("border-danger")
    // J'applique des classes CSS sur l'élément parent
    $(element).parent().removeClass("border-danger").addClass("border-bottom border-success");

    // Vide l'élément suivant le champ texte en lui passant une chaîne de caractères vide
    $(element).next().html("");
    
}

function isError(element, message)
{
    element.parent().removeClass("border-success").addClass("border-bottom border-danger");
    element.next().html(message);
}

// Verification du nom 
function checkName()
{
    // Vérifier que le nom soit supérieur ou égal à 5
    if ($(this).val().lenght >= 5) {
        isSuccess($(this));
    }
    else {
        $(this).next().html("Le nom doit posséder un minimum de 5 caractères");
    
    }
}