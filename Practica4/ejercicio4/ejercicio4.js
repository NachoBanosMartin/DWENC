/*
4. Pide al usuario una lista de números e imprime su suma.
*/

let lista = prompt("Introduce una lista de números:");
let suma = 0;

for (let i = 0; i < lista.length; i++) {
    suma += Number(lista[i]); 
}

console.log("La suma de los números es:", suma);
