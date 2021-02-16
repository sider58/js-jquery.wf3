/**
 * EXERCICE 4
 * -------------------------------------
 */

/**
 * Exercice 1
 */
let prenoms = ["Martine", "Jean", "Sarah", "Edmond", "Jacqueline"];

// 0.
for(let i = 0; i < prenoms.length; i++) {
    document.write(`<p>${prenoms[i]}</p>`);
    // document.write("<p>" + prenoms[i] + "</p>");
}

document.write("<hr>");

// 1.
prenoms.splice(3, 1);

for(let i = 0; i < prenoms.length; i++) {
    document.write(`<p>${prenoms[i]}</p>`);
    // document.write("<p>" + prenoms[i] + "</p>");
}

document.write("<hr>");

// 2.
prenoms.unshift("Guillaume");

for(let i = 0; i < prenoms.length; i++) {
    document.write(`<p>${prenoms[i]}</p>`);
    // document.write("<p>" + prenoms[i] + "</p>");
}

document.write("<hr>");


/**
 * Exercice 2
 */
let courses = ["Lait", "Oeufs", "Farine", "Fouet", "Vanille"];

// 1.
document.write("<ul>");

for (let index = 0; index < courses.length; index++) {
    document.write(`<li>${courses[index]}</li>`);
    // document.write("<li>" + courses[index] + "</li>");
}

document.write("</ul>");

// 2.
document.write("<ul>");

for (let index = 0; index < courses.length; index++) {

    // Vérifie si l'élément en cours est égal à "Lait" OU "Fouet"
    if (courses[index] === "Lait" || courses[index] === "Fouet") {
        document.write(`<li>${courses[index]}</li>`);
        // document.write("<li>" + courses[index] + "</li>");
    }
}

document.write("</ul>");