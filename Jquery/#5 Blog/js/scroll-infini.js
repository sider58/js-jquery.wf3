/**
 * Scroll infini
 */

// Définit le nombre d'articles à afficher à la fois
let pageMax = 4;

// Contient l'index suivant sur lequel commencer
let pageNext = 0;

$(function() {
    // Un écouteur d'évènement sur mon document
    // "J'écoute" le scroll de la page
    $(document).on("scroll", scrollInfini);
});

// Charge des articles au fur et a mesure que l'on scroll sur la page
function scrollInfini()
{
    // Hauteur du hauteur
    let hauteurDocument = $(this).height();

    // Hauteur intérieur de la fenêtre
    let hauteurFenetre = $(window).height();

    // Nombre de pixels entre le haut du document et la position de la barre de scroll
    let positionScroll = $(this).scrollTop();

    // console.log(positionScroll + hauteurFenetre, hauteurDocument);
    if (positionScroll + hauteurFenetre >= hauteurDocument - 1) {
        // console.log("On est en bas ;)");

        // Récupère tous les articles (DIV ayant la classe CSS "post-preview")
        // let articles = $('.post-preview');

        // Clone le contenu de la variable "articles"
        // let clones = articles.clone();

        // Insère les articles au dessus du bouton "Voir la suite"
        // $('.btn').parent().before(clones);

        // Requête AJAX
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts", // Ressource ciblée
            type: "GET", // Requête HTTP utilisée
            dataType: "json", // Type de données en retour, ici JSON
            success: function(response) { // L'argument "response", contiendra les données retournées

                // Boucle sur le tableau de données qui est "response"
                // for(const article of response) {

                // Boucle for() "standard" afin de limiter le nombre de tours
                for (pageNext; pageNext < pageMax; pageNext++) {
                    
                    // Stocke l'article en cours dans une constante
                    const article = response[pageNext];

                    if (article === undefined) {
                        $(".btn").parent().before("<p>Vous êtes à la fin !</p>");

                        // Stoppe la boucle là où elle est. Même fonctionnement quand un switch().
                        break;
                    }

                    $(".btn").parent().before(
                        '<div class="post-preview">'
                      + '<a href="post.html">'
                      + `<h2 class="post-title">${article.title}</h2>`
                      + `<h3 class="post-subtitle">${article.body}</h3>`
                      + '</a>'
                      + '<p class="post-meta">Posted by <a href="#">Start Bootstrap</a> on August 24, 2019</p>'
                      + '</div>'
                      + '<hr>'
                    );
                }

                // Ajoute le nombre d'élément max. à afficher pour le prochain index à récupérer
                pageMax = pageNext + 4;

            },
            error: function(error) { // L'argument "error", contiendra l'erreur retournée
                // console.log(error); // Affiche le code d'entête HTTP
                let message;

                switch (error.status) {
                    case 401:
                        message = "L'accès est interdit ! Veuillez vous identifer !";
                        break;
                    case 403: // Vérifier si les paramètre de la requête AJAX sont bons
                        message = "Une erreur s'est produite lors de l'exécution de la requête HTTP";
                        break;
                    case 404: // Erreur d'écriture sur l'URL cible
                        message = "L'URL cible n'est pas trouvée";
                        break;
                    case 405: // Le type d'accès HTTP à la requête, n'est pas le bon ! [GET, POST, PUT, PATCH, DELETE]
                        message = "L'accès à l'URL est impossible";
                        break;
                    case 500: // Erreur serveur ! Erreur dans votre code !!!
                        message = "Erreur serveur 😱";
                        break;
                    default:
                        message = "Autres erreurs !";
                }

                $(".btn").parent().before(`<p class="text-danger text-center">${message}</p>`);
            },
            statusCode: {
                404: function() {
                    console.log("404 - Not found");
                },
                500: function() {
                    console.log("500 - Server error");
                }
            }
        });
    }
}