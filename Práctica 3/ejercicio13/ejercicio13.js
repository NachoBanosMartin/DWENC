/*
13. Realiza un programa que calcule el sueldo de un trabajador. El programa va a
solicitar el numero de horas que has trabajado en un mes, teniendo en cuenta que
las horas se pagan a 10€.
*/

let horas = parseFloat(prompt("Introduce las horas trabajadas durante el mes: "));
let precioHora = 10.00;

if(!isNaN(horas)){
    alert("Su sueldo de este mes es de: " + (horas * precioHora));
}else{
    alert("Introduce una cantidad válida");
}