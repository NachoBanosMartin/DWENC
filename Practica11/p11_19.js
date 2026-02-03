/*
19. Evita el envío de un formulario si un campo de texto está vacío.
*/

document.getElementById("form").addEventListener("submit", function (evento) {
    if (document.getElementById("entrada").value === "") {
        evento.preventDefault();
        alert("Error. El campo está vacío");
    }
});



