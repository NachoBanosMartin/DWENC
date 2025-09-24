let nota = 7;

switch(nota){
    case 10:
    case 9:
        calificacion = "Sobresaliente";
        break;
    case 8:
    case 7:
        calificacion = "Notable";
        break;
    case 6:
    case 5:
        calificacion = "Bien";
        break;
    case 4:
    case 3:
    case 2:
    case 1:
        calificacion = "Insuficiente";
        break;
    default:
        calificacion = "Nota erronea";
        break;
}

console.log("He obtenido un:", calificacion);