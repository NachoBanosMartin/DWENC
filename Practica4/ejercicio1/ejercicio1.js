/*
1. Pide una cadena de texto al usuario e imprime cada letra indicando su posición en
la cadena.
*/

let cadena = prompt("Introduce una cadena:");

for (let i = 0; i < cadena.length; i++) {
    console.log("Posición " + i + ": " + cadena[i]);
}
