/*
8. Calcula la suma de los primeros 100 números naturales con un bucle while.
*/

let i = 1;
let suma = 0;

while (i <= 100) {
  suma += i;   // suma = suma + i
  i++;
}

console.log("La suma de los primeros 100 números naturales es: " + suma);