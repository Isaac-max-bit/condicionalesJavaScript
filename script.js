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

/* Quinto ejercicio */

let comparar = true;

while(comparar == true){
    let num1 = parseInt(prompt("Ingrese un numero "))
    let num2 = parseInt(prompt("Ingrese otro numero "))
    
    if(num1 > 0 && num2 > 0){
        comparar = false;
        console.log("Bien hecho");
    } else {
        comparar = true;
        console.log("Ingrese un numero mayor que 0");

    }
    if (num1 > num2 && comparar == false){
        console.log("El numero mayor es : " + num1);
    } else if (num1 == num2){
        console.log("Los numeros son iguales");
    } else {
        console.log("El numero mayor es: " + num2)
    }
}

/* Noveno ejercicio*/


let lado1 = parseFloat(prompt("Ingresa el primer lado del triángulo:"));
let lado2 = parseFloat(prompt("Ingresa el segundo lado del triángulo:"));
let lado3 = parseFloat(prompt("Ingresa el tercer lado del triángulo:"));


if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log("Los lados deben ser números positivos.");
} else if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
    console.log("Los lados ingresados no forman un triángulo válido.");
} else {
    
    
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("El triángulo es equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("El triángulo es isósceles.");
    } else {
        console.log("El triángulo es escaleno.");
    }
}

/* decimotercero ejercicio*/

let usuario = prompt("Digite su usuario : ")
console.log("Bienvenido " + usuario)

let contraseña = prompt(" Ingresa tu contraseña : ")

if(contraseña === "1234"){
    console.log("Acceso concedido")
}else{
    console.log("Acceso denegado")
}


/* sexto ejercicio*/

let clasificar = parseInt(prompt("Ingresa tu edad : "))

if(isNaN(clasificar) || clasificar < 0 ){
    console.log("por favor ingresa una edad valida.");
}else{
    if(edad < 12){
        console.log("Eres un niño")
    }else if(clasificar >= 12 && clasificar <= 17){
        console.log("Eres un adolescente")
    }else if(clasificar >= 18 && clasificar <= 64){
        console.log("Eres un adulto")
    }else{
        console.log("Eres un adulto mayor.")
    }
}

/* decimoquinto ejercicio*/

let peso = parseFloat(prompt(" Ingresa su peso y altura : "))

if(isNaN(peso) || peso < 0){
    console.log("por favor ingresa tu masa corporal.");
}else{
    if(peso < 18.5){
        console.log("Tienes bajo peso")
    }else if(peso >= 18.5 && peso <= 24.9){
        console.log("Tienes peso normal")
    }else if(peso >= 25.0 && peso <= 29.9){
        console.log("Tienes sobrepeso")
    }else if(peso >= 29.9 && peso <= 30.0){
        console.log("Tienes obesidad")
    }else{
        console.log("Sufres de obesidad")
    }
}

/* undécimo ejercicio*/


let precioBase = parseFloat(prompt("Ingresa el precio base del producto:"));


if (isNaN(precioBase) || precioBase <= 0) {
    console.log("Por favor, ingresa un precio válido.");
} else {
    let descuento;
    
    
    if (precioBase > 500) {
        descuento = 0.15;
    } else if (precioBase >= 300 && precioBase <= 500) {
        descuento = 0.10;
    } else {
        descuento = 0.05;
    }
    
    
    let precioFinal = precioBase * (1 - descuento);
    
    
    console.log("El precio final después del descuento es: $" + precioFinal.toFixed(2));
}
