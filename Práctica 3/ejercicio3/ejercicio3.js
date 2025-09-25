/*
3. Escribe un programa que pida un número al usuario y calcule su factorial utilizando
un bucle while.
*/

let numero = parseInt(prompt("Introduce un número para calcular su factorial:"));

if(!isNaN(numero)){

  let factorial = 1;
  let i = 1;

  while (i <= numero) {
    factorial *= i;
    i++;
  }

  alert("El factorial de " + numero + " es: " + factorial);
}else{
  alert("Número no válido");
}

