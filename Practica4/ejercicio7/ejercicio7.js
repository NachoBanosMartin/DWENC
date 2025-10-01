/*
7. Escribe un programa que pida una letra y devuelva verdadero o falso dependiendo
de si es una vocal o no. Debe funcionar igual con mayúsculas y con minúsculas.
*/

let letra = prompt("Introduce una letra:");

let letraMinuscula = letra.toLowerCase();

let esVocal = false;

switch (letraMinuscula) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        esVocal = true;
        break;
    default:
        esVocal = false;
}

alert(esVocal);
