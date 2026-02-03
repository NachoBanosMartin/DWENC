/*
7. El usuario introduce un número de filas.
    Al pulsar un botón, genera una tabla con tantas filas como el número que se indique.
*/

function generarTabla() {
    let numero = parseInt(document.getElementById("numero").value);
    let tabla = document.getElementById("tabla");
    tabla.innerHTML = ""; // Limpiar tabla anterior para que no se acumulen

    for (let i = 1; i <= numero; i++) {
        let fila = document.createElement("tr");
        let celda = document.createElement("td");
        celda.innerText = "Fila " + i;
        fila.appendChild(celda);
        tabla.appendChild(fila);
    }
}

