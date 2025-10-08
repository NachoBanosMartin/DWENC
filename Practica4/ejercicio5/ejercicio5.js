/*
5. Pide al usuario una lista de números y muestra el mayor de ellos.
*/

let numeros = prompt("Introduce una lista de números separados por comas:").split(',');

let mayor = parseInt(numeros[0]); 

for (let i = 1; i < numeros.length; i++) {
    let num = parseInt(numeros[i]);
    if (num > mayor) {
        mayor = num;
    }
}

console.log("El número mayor es:", mayor);
