// /* Primer Ejercicio*/

   let edad = parseInt(prompt("Digite su edad  : "))

 if(edad > 18){
    console.log("Usted es mayor de edad : " + edad)
 }else{
     console.log("Usted es menor de edad" + edad)
 } 

 /* Segundo Ejercicio*/

  let num = parseInt(prompt(" Ingresa el numeró"))

 if(num > 0 ){
     console.log(" El numero es positivo " + num)
 }else{
     console.log(" El numero es negativo " + num)
 } 

// /* Tercero Ejercicio*/

  let numero;
 numero = prompt("Introduzca un número : ")
 if(numero % 2 != 0){
     console.log("El numero " + numero + " es impar");
 }else{
     console.log("El numero " + numero + " es par");
 } 

 /* Octavo  Ejercicio*/

  let menu = prompt("Ingresa tu numero de pedido : ")
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
 } 

 /* duodecimo ejercicio*/

  let año;

 año = parseInt(prompt("Ingresa un año : "))
 if((año % 4 == 0) && (año % 100 != 0)){
     console.log("El año " + año +" es bisiesto")
 }else{
     if((año % 100 == 0) && (año % 400 == 0)){
         console.log("El año " + año + " es bisiesto");
     }else{
         console.log("El año "+ año + " no es bisiesto");
     }
 } 

  /* séptimo ejercicio*/

 
 let nota = parseInt(prompt("Ingresa una nota entre 0 y 100:"));


 if (isNaN(nota) || nota < 0 || nota > 100) {
     console.log("Por favor, ingresa una nota válida entre 0 y 100.");
 } else {
    

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

/*decimocuarto ejercicio*/

let dia = parseInt(prompt("Ingrese la hora (de 0 a 23):"));


if (isNaN(dia) || dia < 0 || dia > 23) {
    console.log("Por favor, ingresa una hora válida entre 0 y 23.");
} else {
    
    if (dia >= 6 && dia < 12) {
        console.log("Buenos días");
    } else if (dia >= 12 && dia < 18) {
        console.log("Buenas tardes");
    } else {
        console.log("Buenas noches");
    }
} 

/* décimo ejercicio*/

const numeroSecreto = Math.floor(Math.random() * 10 + 1)

const numeroJugador = parseInt (prompt("Adivina el número secreto entre 1 al 10"));

console.log(`Este es el numero con el que juegas ${numeroJugador}`)

if(numeroJugador === numeroSecreto){
    console.log("!Felicidades, Adivinaste el número ")
}else if (numeroJugador < numeroSecreto){
    console.log("El numero es demasiado bajo, intenta de nuevo")
}else {
    console.log("El numero es muy alto, intenta de nuevo")
}

/* cuarto ejercicio*/


let totalCompra = parseFloat(prompt("Ingresa el total de la compra:"));


if (isNaN(totalCompra) || totalCompra < 0) {
    alert("Por favor, ingresa un número válido.");
} else {
    let totalConDescuento;

    
    if (totalCompra > 100) {
        totalConDescuento = totalCompra * 0.9; // Descuento del 10%
        console.log("Total con descuento: $" + totalConDescuento.toFixed(2));
    } else {
        // Muestra el total sin descuento si es menor o igual a 100
        console.log("Total sin descuento: $" + totalCompra.toFixed(2));
    }
}
