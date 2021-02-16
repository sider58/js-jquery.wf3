/**
 * PLUS OU MOINS
 * -------------------------------------
 */

// localStorage = Données persistentes jusqu'à ce qu'on le vide nous même
// sessionStorage = Données persistantes jusqu'à la fermeture du navigateur

// Attends que le DOM soit chargé
window.onload = function() {

    // Nombre d'essais max.
    localStorage["nbEssais"] = 5;

    // Génération d'un nombre aléatoire
    localStorage["randomNumber"] = Math.floor(Math.random() * 100) + 1;
    // let randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Sélection de mon formulaire dans le DOM selon son ID
    let form = document.querySelector("#formGame");

    // Écouteur d'évènement sur le formulaire
    form.addEventListener("submit", inGame);
	// console.log(form);
	
	let button = document.querySelector("#rejouer");
	button.addEventListener("click", rejouer);
}

function rejouer()
{
	// Rafraichit la page courante
	document.location.reload();
}

// Logique du jeu
function inGame(event)
{
    // Annule l'action "primaire" du formulaire
    event.preventDefault();

    // Récupération du formulaire
    let form = document.querySelector("#formGame");

    // Récupération de la balise "DIV" qui contiendra les indices du jeu
    let phrase = document.querySelector("#phrase");

    // Récupération de l'élément HTML ayant pour ID "historique"
	let historique = document.querySelector("#historique");
	
	let compteur = document.querySelector("#compteur");

    // Récupération du champs "number" en lui indiquant l'index du tableau voulu
    let number = form[0];

    // Stockage de la valeur aléatoire dans une variable
	let randomNumber = localStorage["randomNumber"];
	
	// Récupération dans une variable du nombre d'essais
	let essais = localStorage["nbEssais"];

    // console.log(number.value, localStorage["randomNumber"], number.value < Number(randomNumber));

    // Exemple création div
    // let div = document.createElement("div");
    // div.classList.add("w-50", "mx-auto");

    if (essais != 0) {
        
        // Compare la valeur du champs texte "number.value" avec le nombre généré
        // par notre script et stocké dans le localStorage : "localStorage["randomNumber"]"
        if (number.value < Number(randomNumber)) {
            console.log('plus grand');
            // div.innerHTML = "<h4>Le nombre à trouver est plus grand</h4>";
            phrase.innerHTML = "<h4>Le nombre à trouver est plus grand</h4>";
            historique.innerHTML += `<p>${number.value}</p>`;
        }
        else if (number.value > Number(randomNumber)) {
            console.log('plus petit');
            // div.innerHTML = "<h4>Le nombre à trouver est plus petit</h4>";
            phrase.innerHTML = "<h4>Le nombre à trouver est plus petit</h4>";
            historique.innerHTML += `<p>${number.value}</p>`;
        }
        else {
            console.log('gagné !');
            // div.innerHTML = "<h2 class=\"text-success\">Bravo, tu as gagné !</h2>";
            phrase.innerHTML = "<h2 class=\"text-success\">Bravo, tu as gagné !</h2>";

            // Vider complétement le localStorage
            localStorage.clear();
		}
		
		// Décrémentation du nombre d'essais
		essais--;

		// Stockage de la nouvelle valeur dans le localStorage
		localStorage["nbEssais"] = essais;

		// Affichage du compteur sur la page HTML
		compteur.innerHTML = `<p>Il vous reste ${essais} essais</p>`;
	}
	else {
		form.classList.add("d-none");
		phrase.innerHTML = "<h2 class=\"text-danger\">Perdu, tu as fais trop d'essais !</h2>";
	}

    // Ajout de la DIV après le formulaire
    // form.after(div);
}