/*
6. Solicita al usuario una cadena de texto y cuenta cuántas vocales tiene. Imprime el
resultado en la consola.
*/
let texto = prompt("Introduce una cadena de texto:");

let vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
let contador = 0;

for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i])) {
    contador++;
  }
}

console.log("La cadena tiene " + contador + " vocales.");
