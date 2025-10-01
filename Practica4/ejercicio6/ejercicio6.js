/*
6. Pide una cadena de texto al usuario y una letra. Escribe un programa que indique
el número de veces que aparece esa letra en la cadena
*/

let cadena = prompt("Introduce una cadena de texto:");
let letra = prompt("Introduce la letra a buscar:");

let letraMinuscula = letra.toLowerCase();
let cadenaMinuscula = cadena.toLowerCase();

let contador = 0;

for (let i = 0; i < cadenaMinuscula.length; i++) {
    if (cadenaMinuscula[i] === letraMinuscula) {
        contador++;
    }
}

alert("La letra introducida aparece " + contador + " veces.");
