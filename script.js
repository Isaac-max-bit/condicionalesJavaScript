/* Primer Ejercicio*/

 /* let edad = parseInt(prompt("Digite su edad  : "))

if(edad > 18){
    console.log("Usted es mayor de edad : " + edad)
}else{
    console.log("Usted es menor de edad" + edad)
} */

/* Segundo Ejercicio*/

/* let num = parseInt(prompt(" Ingresa el numeró"))

if(num > 0 ){
    console.log(" El numero es positivo " + num)
}else{
    console.log(" El numero es negativo " + num)
} */

/* Tercero Ejercicio*/

/* let numero;
numero = prompt("Introduzca un número : ")
if(numero % 2 != 0){
    console.log("El numero " + numero + " es impar");
}else{
    console.log("El numero " + numero + " es par");
} */

/* Octavo  Ejercicio*/

/* let menu = prompt("Ingresa tu numero de pedido : ")
switch(menu){
    case "1":
        console.log("Pizza")
        break;
    case "2": 
        console.log("Hamburguesa")
        break;
    case "3": 
        console.log("Tacos")
        break;
    default:
        console.log("Opción no valida")            
} */

/* duodecimo ejercicio*/

/* let año;

año = parseInt(prompt("Ingresa un año : "))
if((año % 4 == 0) && (año % 100 != 0)){
    console.log("El año " + año +" es bisiesto")
}else{
    if((año % 100 == 0) && (año % 400 == 0)){
        console.log("El año " + año + " es bisiesto");
    }else{
        console.log("El año "+ año + " no es bisiesto");
    }
} */

 /* séptimo ejercicio*/

 // Solicita al usuario que ingrese una nota entre 0 y 100
let nota = parseInt(prompt("Ingresa una nota entre 0 y 100:"));

// Verifica si la nota está dentro del rango permitido
if (isNaN(nota) || nota < 0 || nota > 100) {
    console.log("Por favor, ingresa una nota válida entre 0 y 100.");
} else {
    // Muestra la clasificación basada en la nota
    if (nota >= 90) {
        console.log("Excelente");
    } else if (nota >= 70) {
        console.log("Bueno");
    } else if (nota >= 50) {
        console.log("Regular");
    } else {
        console.log("Insuficiente");
    }
}