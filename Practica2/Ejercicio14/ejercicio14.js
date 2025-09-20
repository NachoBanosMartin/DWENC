
/* 
14. Crea dos variables, x = 20 y y = "20". Compáralas usando tanto la igualdad débil
(==) como la igualdad estricta (===) mostrando los resultados.
*/

let x = 20;    
let y = "20";   

if (x == y) {
  console.log("Tienen el mismo contenido");
} else {
  console.log("No tienen el mismo contenido");
}

if (x === y) {
  console.log("Tienen el mismo formato");
} else {
  console.log("No tienen el mismo formato");
}
