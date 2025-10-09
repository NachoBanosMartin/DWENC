/*
14.Pide al usuario su fecha de nacimiento (yyyy-mm-dd) y calcula su edad en años
completos. Ten en cuenta si ya ha cumplido años este año o no.
*/

let hoy = new Date();
let fechaNacimiento = prompt("Introduce la fecha (yyyy-mm-dd):");
let cumpleanos = new Date(fechaNacimiento);
let edad = hot.getFullYear() - fechaNacimiento.getFullYear();

if(hoy.getMonth() < fechaNacimiento.getMonth() || (hoy.getMonth() === fechaNacimiento.getMonth && hoy.getDate() < fechaNacimiento.getDate())){
    edad --;
}

console.log("Tienes",edad,"años");





