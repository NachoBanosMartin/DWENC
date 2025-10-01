/*
8. Pide una cadena al usuario. Escribe un programa que devuelva una cadena de
caracteres formada por los elementos del array separados por un guión.
*/

let cadena = prompt("Introduce una cadena:");

let arrayCaracteres = cadena.split('');

let resultado = arrayCaracteres.join('-');

alert(resultado);
