/*
4. Pide al usuario un número N y calcula la suma de los números del 1 a N.
*/

let numero = parseInt(prompt("Introduzca un número:"));
let suma = 0;

if(!isNaN(numero)){
    for(i = 1; i <= numero; i++){    
        suma += i;
    }
    
    console.log("La suma de los números es:", suma);
}else{
    alert("Introduzca un número válido");
}
