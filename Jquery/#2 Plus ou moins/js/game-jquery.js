/**
 * PLUS OU MOINS EN JQUERY
 * ----------------------------------------------------------------
 */

// On attends que le DOM soit chargé
$(function () {

    // Stocker le nombre d'essais max.
    localStorage['nbEssais'] = 5;

    // Génération d'un nombre aléatoire
    localStorage['randomNumber'] = Math.floor(Math.random() * 100) + 1;
    // console.log(localStorage['randomNumber']);

    // Écouteurs d'évènements
    $("#formGame").on("submit", inGame);
    $(".rejouer").on("click", rejouer);
});

function rejouer()
{
    // document.location.reload();
    location.reload();
}

// Fonction principale du jeu
function inGame(event)
{
    // J'annule l'envoi du formulaire, par conséquence, le rechargement de la page
    event.preventDefault();

    // Récupération du nombre d'essais en cours
    let nbEssais = localStorage["nbEssais"];

    // Récupération du numéro aléatoire
    let randomNumber = localStorage["randomNumber"];

    // Récupération de la DIV contenant les indices de jeux
    let indice = $("#phrase");

    // Récupération de la valeur écrit dans le champs type "number"
    let number = $("#nombre").val();

    // Si le nombre d'essais est différent de zéro, alors on continue de jouer
    if (nbEssais != 0) {

        if (number < Number(randomNumber)) {
            // console.log("Plus grand");
            indice.html("<h4>Le nombre à trouver est plus grand !</h4>");
        }
        else if (number > Number(randomNumber)) {
            // console.log("Plus petit");
            indice.html("<h4>Le nombre à trouver est plus petit !</h4>");
        }
        else {
            // console.log("Gagné !");
            indice.html("<h2 class=\"text-success\">Wouah ! Quel BG !</h2>");

            // Afficher le feu d'artifice et le bouton "rejouer"
            $("canvas").show();
            $("#btn-reload").show();

            // Vide le localStorage
            localStorage.clear();
        }

        // Affiche le nombre choisi dans l'historique
        // prepend() : affiche un élément au dessus de ceux existant
        $("#historique").prepend(`<p>${number}</p>`);

        // Stocke la nouvelle valeur du nombre d'essais dans le localStorage
        localStorage["nbEssais"] = nbEssais - 1;

        // Affiche à l'utilisateur, le nombre d'essais restants
        $("#compteur").html(`<p>Il te reste ${nbEssais} essais</p>`);
    }

    // Sinon, on affiche un message de fin de jeu
    else {
        $("#compteur").hide();

        $("#formGame").addClass("d-none");
        indice.html("<h2 class=\"text-danger\">Perdu ! Tu as fait trop d'essais !</h2>");
        
        // Revelation du nombre
        $("#toucheperso");
        indice.html(`<h2>Le bon nombre était ${randomNumber} !</h2><br><h2>Retente ta chance </h2>`);
        // Affiche le bouton rejouer
        $("#btn-reload").show();
    }
}