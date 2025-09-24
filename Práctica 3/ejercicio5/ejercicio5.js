/*
5. Pide al usuario un número y muestra su tabla de multiplicar del 1 al 10 usando un
bucle for.
*/

let numero = parseInt(prompt("Introduzca un número:"));
let tabla = "";

for (let i = 1; i <= 10; i++) {
    let resultado = i * numero;
    tabla += numero + " x " + i + " = " + resultado + "\n";
}

alert(tabla);
