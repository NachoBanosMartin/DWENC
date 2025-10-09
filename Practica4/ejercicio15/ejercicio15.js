/*
15.Pide al usuario una fecha (yyyy-mm-dd) y muestra el nombre del día de la semana
que le corresponde. Ej: 2025-10-02 devolverá Jueves
*/

let fechaE14 = prompt("Introduce la fecha (yyyy-mm-dd):");
let fecha = new Date(fechaE14);

let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

console.log(dias[fecha.getDate()]);
