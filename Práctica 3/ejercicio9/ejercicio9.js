/*
9. Pide un número al usuario y determina si es primo o no.
*/

let numero = parseInt(prompt("Introduce un número: "));

let esPrimo = true;

if (numero <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    alert(numero + " es un número primo");
} else {
    alert(numero + " no es un número primo");
}
