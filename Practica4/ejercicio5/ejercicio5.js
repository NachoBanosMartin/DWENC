/*
5. Pide al usuario una lista de números y muestra el mayor de ellos.
*/

let numeros = prompt("Introduce una lista de números:");

let mayor = Number(numeros[0]); 

for (let i = 1; i < numeros.length; i++) {
    let num = Number(numeros[i]);
    if (num > mayor) {
        mayor = num;
    }
}

console.log("El número mayor es:", mayor);
