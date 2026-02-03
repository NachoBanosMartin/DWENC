/*
16.  Muestra en pantalla la última tecla pulsada 
por el usuario en un campo de texto.
*/

document.getElementById("imput").addEventListener("keydown", function (event) {
    document.getElementById("tecla").innerText = "Tecla pulsada: " + event.key;
    if (event.key === " ") {
        document.getElementById("tecla").innerText = "Tecla pulsada: Espacio";
    }
});


