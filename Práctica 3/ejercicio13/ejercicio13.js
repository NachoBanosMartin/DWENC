/*
13. Realiza un programa que calcule el sueldo de un trabajador. El programa va a
solicitar el numero de horas que has trabajado en un mes, teniendo en cuenta que
las horas se pagan a 10€.
*/

let horas = prompt("Introduce las horas trabajadas durante el mes: ");
let precioHora = 10.00;
let multiplicacion = (horas * precioHora);

if(!isNaN(horas)){
    alert("Su sueldo de este mes es de: " + multiplicacion.toFixed(2));
}else{
    alert("Introduce una cantidad válida");
}