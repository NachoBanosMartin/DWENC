/*
10.Genera un número aleatorio entre 1 y 10 y el usuario tiene que adivinarlo. El
programa debe dar pistas de que el número introducido es Mayor o Menor al
generado.
*/
let num = Math.floor(Math.random() * 10) + 1;


    let numero = parseInt(prompt("Introduce un número del 1 al 10 para saber si has acertado: "));

    if (numero === num) {
        alert("Has acertado");
    } else if (numero < num) {
        alert("El número introducido es menor al generado");
    } else {
        alert("El número introducido es mayor al generado");
    }

console.log(num);
