/**
 * EXERCICE 4
 * -------------------------------------
 */

/**
 * Point 1
 */
let counter = 2;

while(counter < 20) {
    document.write(`${counter} - `);
    counter+=2;
}

document.write("<hr>");


/**
 * Point 2
 */
let carre = 0;

for(let i = 1; i <= 10; i++) {
    carre = i*i;
    document.write(`Mon nombre ${i} - Son carré : ${carre}`);
    document.write("<br>");
}

document.write("<hr>");


/**
 * Point 3
 */

// Math.random() - Génère un nombre aléatoire entre 0.00000... et 0.99999...
// Math.floor() - Arrondis un nombre à son entier inférieur 

// Génère un nombre aléatoire entre 1 et 100
// let aleatoire = Math.floor(Math.random() * 100);
// document.write(`${aleatoire}`);

for(let i = 1; i <= 5; i++) {
    let aleatoire = Math.floor(Math.random() * 100);
    document.write(`${aleatoire} - `);
}

document.write("<hr>");


/**
 * Point 4
 */
let compteur = 2;
while(compteur <= 20) {

    if (compteur !== 13) {
        document.write(`${compteur} - `);
    }

    compteur++;
}