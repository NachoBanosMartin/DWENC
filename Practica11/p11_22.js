/*
22. Crea un formulario con dos campos: email y contraseña.
Cuando el usuario entra en un campo, se mostrará una ayuda debajo. Al salir del
foco, se validará con expresiones regulares que el email debe tener un formato
correcto y la contraseña será de al menos 8 caracteres.
*/

let email = document.getElementById("email");
let pass = document.getElementById("pass");

email.addEventListener("focus", function () {
    document.getElementById("infoEmail").innerHTML =
        "Introduce un email válido (usuario@dominio.extensión)";
});

email.addEventListener("blur", function () {
    let patron = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

    if (!patron.test(email.value)) {
        document.getElementById("infoEmail").innerHTML =
            "Error. Email incorrecto";
    } else {
        document.getElementById("infoEmail").innerHTML = ""; //Vaciamos el mensaje de ayuda
    }
});

pass.addEventListener("focus", function () {
    document.getElementById("infoPass").innerHTML =
        "La contraseña debe tener al menos 8 caracteres";
});

pass.addEventListener("blur", function () {
    if (pass.value.length < 8) {
        document.getElementById("infoPass").innerHTML =
            "Error. Contraseña demasiado corta";
    } else {
        document.getElementById("infoPass").innerHTML = ""; //Vaciamos el mensaje de ayuda
    }
});
