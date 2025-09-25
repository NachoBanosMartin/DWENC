/*
11. Pide un número al usuario e imprímelo invertido.
*/

let numero = prompt("Introduce un número: ");

let separar = numero.split("");
let invertir = separar.reverse();
let unir = invertir.join("");

alert("El número introducido invertido, sería: " + unir);