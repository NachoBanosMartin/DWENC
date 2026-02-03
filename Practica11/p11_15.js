/*
15. Al pasar el ratón sobre un div, 
cambia su color de fondo, y vuelve al original cuando salga.
*/

let caja = document.getElementById("caja");

caja.addEventListener("mouseover", function () {
    caja.style.backgroundColor = "orange";
});

caja.addEventListener("mouseout", function () {
    caja.style.backgroundColor = "blue";
});



