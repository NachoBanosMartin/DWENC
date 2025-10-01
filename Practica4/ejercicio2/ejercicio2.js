/*
2. Dada la cadena "Desarrollo de Aplicaciones Web", cuenta las veces que aparece la
letra "a".
*/

let cadena = "Desarrollo de Aplicaciones Web";

cadena.toLowerCase.split(" ");
let contador = 0;

if(cadena.contains("a")){
    contador ++;
}

console.log("La cadena de texto cuenta con ", contador, " a.");