/*
12.Pide dos números al usuario (inicio y fin) y muestra cuántos son pares y cuántos
son impares.
*/

let numero1 = parseInt(prompt("Introduce un número: "));
let numero2 = parseInt(prompt("Introduce un otro número: "));

let contadorPares = 0;
let contadorImpares = 0;

for(i = numero1; i < numero2; i ++){
    if(i % 2 == 0){
        contadorPares ++;
    }else{
        contadorImpares ++;
    }
}

alert("La cantidad de pares es de:" + contadorPares);
alert("La cantidad de impares es de:" + contadorImpares);


