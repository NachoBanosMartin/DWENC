/*
14. Usando lo visto en eventos, 
crea un botón que muestre cuántas veces ha sido pulsado.
*/

let contador = 0;

document.getElementById("btn").addEventListener("click", function () {
    contador++;
    document.getElementById("contador").innerText = contador;
});
