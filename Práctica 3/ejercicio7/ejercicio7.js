/*
7. Declara una variable nota (0-10) y muestra si es “Suspenso”, “Aprobado”, Notable”
o “Sobresaliente”.
*/

let nota = parseInt(prompt("Introduce tu nota (0-10):"));

if (nota >= 0 && nota < 5) {
  console.log("Suspenso");
} else if (nota >= 5 && nota < 7) {
  console.log("Aprobado");
} else if (nota >= 7 && nota < 9) {
  console.log("Notable");
} else if (nota >= 9 && nota <= 10) {
  console.log("Sobresaliente");
} else {
  console.log("Nota inválida, introduce un número entre 0 y 10.");
}