/*
4. Pide al usuario un número N y calcula la suma de los números del 1 a N.
*/

let numero = prompt("Introduzca un número:");
let suma = 0;

for(i = 1; i <= numero; i++){    
    suma = suma + i;
}

console.log("La suma de los números es:", suma);