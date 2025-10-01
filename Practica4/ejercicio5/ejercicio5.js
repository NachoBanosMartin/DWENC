/*
5. Pide al usuario una lista de números y muestra el mayor de ellos.
*/

let numeros = prompt("Indica una lista de números para saber el mayor de ellos:");
let numerosSeparados = parseInt(numeros.split(","));
let mayor;

for(i = 0; i < numeros.length; i ++){
    if(numerosSeparados[i] >= 9){
        mayor = numerosSeparados[i];
    }
}