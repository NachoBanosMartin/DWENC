/*
20. Crea un formulario para introducir el nombre y la edad de usuarios, validando que
los datos no estén vacíos antes de añadirlos, o la edad sea incorrecta. Si los datos
están bien, al pulsar el botón de Añadir usuario, se guardan esos datos en arrays y
se muestran en una lista en la página. Si se pulsa el botón Eliminar último usuario,
se elimina del array y de la lista de la página.
*/

let nombres = [];
let edades = [];

document.getElementById("formUsuario").addEventListener("submit", function (evento) {
    evento.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);

    if (nombre === "" || isNaN(edad) || edad < 0) {
        alert("Error. Datos incorrectos");
        return;
    }

    nombres.push(nombre);
    edades.push(edad);

    mostrarUsuarios();
    this.reset();
});

document.getElementById("eliminar").addEventListener("click", function () {
    if (nombres.length > 0) {
        nombres.pop();
        edades.pop();
        mostrarUsuarios();
    }
});

function mostrarUsuarios() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 0; i < nombres.length; i++) {
        let li = document.createElement("li");
        li.textContent = nombres[i] + " (" + edades[i] + " años)";
        lista.appendChild(li);
    }
}
