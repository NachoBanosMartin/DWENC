/*
2. Dada la cadena "Desarrollo de Aplicaciones Web", cuenta las veces que aparece la
letra "a".
*/

let cadena = "Desarrollo de Aplicaciones Web";
let contador = 0;

let cadenaMinusculas = cadena.toLowerCase();

for (let i = 0; i < cadenaMinusculas.length; i++) {
    if (cadenaMinusculas[i] === "a") {
        contador++;
    }
}

console.log("La letra 'a' aparece", contador, "veces en la cadena.");
