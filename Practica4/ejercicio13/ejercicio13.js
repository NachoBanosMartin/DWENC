/*
13.Pide al usuario una fecha en formato americano (mm/dd/yyyy) y muéstrala en
formato europeo (dd/mm/yyyy).
*/

let fechaUsuario = prompt("Introduce la fecha (yyyy-mm-dd):");

if (fechaUsuario !== null) { 
    let fechaAmericana = new Date(fechaUsuario);
    console.log("La fecha en formato Americano es: " + fechaAmericana);
    let fechaEuropea = fechaAmericana.toLocaleDateString();
    console.log("La fecha en formato Europeo es:" + fechaEuropea);
} else {
    console.log("El usuario canceló la operación.");
}

