/*
15.Muestra todos los números entre 1 y 50 que sean divisibles por 3 o por 5, indicando
cuál es el divisor, si el 3 o el 5 en cada caso.
*/

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " es divisible por 3 y por 5");
    } else if (i % 3 === 0) {
        console.log(i + " es divisible por 3");
    } else if (i % 5 === 0) {
        console.log(i + " es divisible por 5");
    }
}