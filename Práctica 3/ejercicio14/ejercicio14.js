/*
14.Calcular el área de un circulo, pidiendo el radio al usuario. Recuerda que el área de
un círculo es igual a PI por radio al cuadrado.
*/

let radio = parseFloat(prompt("Introduce el radio del circulo"));

let area = Math.PI * Math.pow(radio, 2);

alert("El área del circulo es:" + area);