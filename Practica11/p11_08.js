/*
8. El usuario introduce un número de filas y de columnas.
Al pulsar un botón, genera una tabla con tantas filas y columnas como se indiquen.
*/

function generarTabla() {
    let numFilas = parseInt(document.getElementById("filas").value);
    let numColumnas = parseInt(document.getElementById("columnas").value);
    let tabla = document.getElementById("tabla");
    tabla.innerHTML = ""; // Limpiar tabla anterior para que no se acumulen

    for (let i = 1; i <= numFilas; i++) {
        let fila = document.createElement("tr");
        for (let j = 1; j <= numColumnas; j++) {
            let celda = document.createElement("td");
            celda.innerText = "Fila " + i + ", Columna " + j;
            fila.appendChild(celda);
        }   
        tabla.appendChild(fila);
    }
}


