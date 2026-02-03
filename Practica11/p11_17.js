/*
17. Crea varios botones. 
Al pulsar cualquiera de ellos, muestra cuál ha sido pulsado.
*/

let botones = document.getElementsByTagName("button");

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function (evento) {
        document.getElementById("informacion").innerText =
            "Has pulsado el botón: " + evento.target.innerText;
        //también podemos acceder a evento.target.id si queremos el id, evento.target.name, etc
    });
}


