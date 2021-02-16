
let number1 = Number(prompt("Entrez un premier nombre"));
if (isNaN(number1)) {
    Number(prompt("Entrez un nombre !"));
}

let operation = prompt("Entrez une opération (+, -, *, /)");

let number2 = Number(prompt("Entre un deuxième nombre"));
 
let resultat = null;

if (operation === "+" ) {
    // SI "opération" est égal au signe "+"
    resultat = number1 + number2;
}

else if (operation === '-') {
    resultat = number1 -  number2;
}

else if (operation === '*') {
    resultat = number1 *  number2;
}

else if (operation === '/') {
    resultat = number1 /  number2;
}

else {
    document.write("Attention, votre opérateur est inexacte !");
    console.log("Attention, votre opérateur est inexacte !");
}

if (resultat != null) {
    document.write(`${number1} ${operation} ${number2} = ${resultat}`);
    console.log(`${number1} ${operation} ${number2} = ${resultat}`);
}

