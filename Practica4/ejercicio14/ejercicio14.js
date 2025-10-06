/*
14.Pide al usuario su fecha de nacimiento (yyyy-mm-dd) y calcula su edad en años
completos. Ten en cuenta si ya ha cumplido años este año o no.
*/

const hoy = new Date();
let fechaNacimiento = prompt("Introduce la fecha (YYYY-MM-DD):");
let cumpleanos = new Date(fechaNacimiento);

if (cumpleanos !== null) { 
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let mes = hoy.getMonth() - cumpleanos.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
} else {
    console.log("El usuario canceló la operación.");
}




