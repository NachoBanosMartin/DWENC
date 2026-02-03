/*
1. Crea una página con:
    3 cajas de texto con name="dato"
    1 párrafo con id="info"
    1 botón que, al pulsarlo, muestre en el párrafo:
        • El valor del primer elemento con name="dato"
        • El número total de inputs en la página
*/

function mostrar() {
    let elementos = document.getElementsByName("dato");
    let inputs = document.getElementsByTagName("input");
    let primero = elementos[0].value;
    let totalInputs = inputs.length;
    document.getElementById("info").innerHTML = 
    "Primer dato: " + primero + "<br>Total de inputs: " + totalInputs;
}
