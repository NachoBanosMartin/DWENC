/*
12.Dado el array de notas = [5, 8, 4, 9, 3, 7]. Pide al usuario que introduzca una nueva
nota que se añadirá y se mostrará el array actualizado. Calcula la nota media de la
clase y elimina la nota más baja. Por último, muestra el array final.
*/

let notas = [5, 8, 4, 9, 3, 7];

let nota = parseInt(prompt("Introduce una nota:"));

notas.push(nota);

console.log(notas);
let suma = 0;

for(let i = 0; i < notas.length; i ++){    
    suma += notas[i];
    i ++;
}

console.log("La media de las notas es de:", suma);

let min = Math.min(...notas);
console.log("La nota min es:",min);

let index = notas.indexOf(min);
notas.splice(index,1);
console.log("El array de notas final es:", notas)
