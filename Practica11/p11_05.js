/*
    5. Crea dos botones: “+1” y “-1”.
    El contador debe actualizarse en pantalla al pulsar los botones.
*/
let contador = 0;

function incrementar() {
    contador++;
    actualizarContador();
}

function decrementar() {
    contador--;
    actualizarContador();
}

function actualizarContador() {
    let pantalla = document.getElementById("contador");
    pantalla.innerText = "Contador: " + contador;
}
