/*
21. Crea un formulario con dos campos: nombre y edad, y un botón Enviar, que estará
deshabilitado.
Cuando el usuario pierda el foco de cada campo, se validará con expresión regular
que el nombre debe contener solo letras y tener al menos 3 caracteres. La edad
estará comprendida entre 18 y 65 años.
Cuando un dato no es correcto, se mostrará un mensaje de aviso debajo del
campo correspondiente, en la misma página.
Una vez que ambos campos contengan datos correctos, se habilitará el botón.
*/

let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let botonEnviar = document.getElementById("enviar");

let nombreValido = false;
let edadValida = false;

nombre.addEventListener("blur", validarNombre());
edad.addEventListener("blur", validarEdad());

function validarNombre() {
    let valor = nombre.value.trim();
    let patron = /[A-Za-z]{3,}/;

    if (!patron.test(valor)) {
        document.getElementById("errorNombre").innerHTML =
            "Error. El nombre debe tener al menos 3 letras";
    } else {
        document.getElementById("errorNombre").innerHTML = ""; //Vaciamos el mensaje de error
        nombreValido = true;
    }
    activarBoton();
}

function validarEdad() {
    let valor = parseInt(edad.value);

    if (isNaN(valor) || valor < 18 || valor > 65) {
        document.getElementById("errorEdad").innerHTML =
            "Error. La edad debe estar entre 18 y 65";
    } else {
        document.getElementById("errorEdad").innerHTML = ""; //Vaciamos el mensaje de error
        edadValida = true;
    }
    activarBoton();
}

function activarBoton() {
   if (nombreValido && edadValida) {
        botonEnviar.disabled = false;
    } else {
        botonEnviar.disabled = true;
    }
}
