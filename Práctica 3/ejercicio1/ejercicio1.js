/*
1. Escribe un programa que pida un número al usuario y determine si es par o impar
usando un condicional if-else.
*/

let numero = parseInt(prompt("Introduzca un número:"));

if(!isNaN(numero)){
    if(numero % 2 == 0){
        console.log("El número introducido es par");
    }else{
        console.log("El número introducido es impar");
    }
}else{
    alert("Tienes que introducir un número");
}