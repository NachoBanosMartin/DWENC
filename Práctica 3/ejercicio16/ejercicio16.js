/*
16.Pide dos números y una operación (+, -, *, /). Realiza la operación indicada y
muestra el resultado.
*/

let numero1 = parseFloat(prompt("Indica el primer número: "));
let numero2 = parseFloat(prompt("Indica el segundo número: "));

let operacion = prompt("Indica la operción (+, -, *, /): ");
let resultado = 0;

switch(operacion){
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        resultado = numero1 / numero2;
        break;
    default:
        alert("Indica una operación válida");
        break;
}

alert("El resultado es de la operación " + operacion + " es: " + resultado);