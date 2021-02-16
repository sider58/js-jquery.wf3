/**
 * SEARCH OMDB API
 * -------------------------
 */

// Stocke la clé API
const apiKey = "9806a622";

// Attends que le DOM soit chargé
window.onload = function() {

    // Récupération du champs texte
    let search = document.querySelector("#title");

    // Écouteur d'évènement
    search.addEventListener("keyup", searchByTitle);
}

// Recherche un film selon son titre sur l'API "OMDb API"
// http://www.omdbapi.com
function searchByTitle()
{
    // Récupération du champs texte
    let search = document.querySelector("#title");

    // Lance la recherche si la recherche contient plus de 3 caractères
    if (search.value.length > 3) {
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search.value}`)
        .then((response) => response.json())
        .then((movies) => {

            // Récupération de la balise DIV ayant pour ID "results"
            let results = document.querySelector("#results");
            results.innerHTML = '';

            for(const movie of movies.Search) {
                results.innerHTML += '<div class="col-6 card pb-4">'
                    + `<img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">`
                    + '<div class="card-body">'
                    + `<h5 class="card-title">${movie.Title}</h5>`
                    + `<p class="card-text">${movie.Year}</p>`
                    + '</div>'
                    + '</div>';
            }

        })
        .catch((error) => {
            // alert(error);
        })
    }
}