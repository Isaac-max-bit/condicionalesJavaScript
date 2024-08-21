function menu() {
    var opcion = parseInt(prompt("Selecciona el ejercicio que deseas ejecutar (1-15):"));

    switch(opcion) {
        case 1:
            ejercicio1();
            break;
        case 2:
            ejercicio2();
            break;
        case 3:
            ejercicio3();
            break;
        case 4:
            ejercicio4();
            break;
        case 5:
            ejercicio5();
            break;
        case 6:
            ejercicio6();
            break;
        case 7:
            ejercicio7();
            break;
        case 8:
            ejercicio8();
            break;
        case 9:
            ejercicio9();
            break;
        case 10:
            ejercicio10();
            break;
        case 11:
            ejercicio11();
            break;
        case 12:
            ejercicio12();
            break;
        case 13:
            ejercicio13();
            break;
        case 14:
            ejercicio14();
            break;
        case 15:
            ejercicio15();
            break;
        default:
            console.log("Opción no válida");
    }
}


// /* Primer Ejercicio*/

function ejercicio1(){
    let edad = parseInt(prompt("Digite su edad  : "))
 
  if(edad > 18){
     alert("Usted es mayor de edad : " + edad)
  }else{
      alert("Usted es menor de edad : " + edad)
  } 
 }
 

  /* Segundo Ejercicio*/
 
  function ejercicio2(){
    let num = parseInt(prompt(" Ingresa el numeró "))
  
   if(num > 0 ){
       alert(" El numero es positivo " + num)
   }else{
       alert(" El numero es negativo " + num)
   } 
   }


   // /* Tercero Ejercicio*/
 
 function ejercicio3(){
    let numero;
   numero = prompt("Introduzca un número : ")
   if(numero % 2 != 0){
       alert("El numero " + numero + " es impar");
   }else{
       alert("El numero " + numero + " es par");
   } 
  }


  /* cuarto ejercicio*/
 
 function ejercicio4(){
 
    let totalCompra = parseFloat(prompt("Ingresa el total de la compra:"));
    
    
    if (isNaN(totalCompra) || totalCompra < 0) {
        alert("Por favor, ingresa un número válido.");
    } else {
        let totalConDescuento;
    
        
        if (totalCompra > 100) {
            totalConDescuento = totalCompra * 0.9; // Descuento del 10%
            alert("Total con descuento: $" + totalConDescuento.toFixed(2));
        } else {
            // Muestra el total sin descuento si es menor o igual a 100
            alert("Total sin descuento: $" + totalCompra.toFixed(2));
        }
    }
    }

    /* Quinto ejercicio */
 
 function ejercicio5(){
    let comparar = true;
    
    while(comparar == true){
        let num1 = parseInt(prompt("Ingrese un numero "))
        let num2 = parseInt(prompt("Ingrese otro numero "))
        
        if(num1 > 0 && num2 > 0){
            comparar = false;
            alert("Bien hecho");
        } else {
            comparar = true;
            alert("Ingrese un numero mayor que 0");
    
        }
        if (num1 > num2 && comparar == false){
            alert("El numero mayor es : " + num1);
        } else if (num1 == num2){
            alert("Los numeros son iguales");
        } else {
            alert("El numero mayor es: " + num2)
        }
    }
    }

    /* sexto ejercicio*/
 
 function ejercicio6(){
    let clasificar = parseInt(prompt("Ingresa tu edad : "))
    
    if(isNaN(clasificar) || clasificar < 0 ){
        alert("por favor ingresa una edad valida.");
    }else{
        if(clasificar < 12){
            alert("Eres un niño")
        }else if(clasificar >= 12 && clasificar <= 17){
            alert("Eres un adolescente")
        }else if(clasificar >= 18 && clasificar <= 64){
            alert("Eres un adulto")
        }else{
            alert("Eres un adulto mayor.")
        }
    }
    }
    
      /* séptimo ejercicio*/
 
  function ejercicio7(){
    let nota = parseInt(prompt("Ingresa una nota entre 0 y 100:"));
   
   
    if (isNaN(nota) || nota < 0 || nota > 100) {
        alert("Por favor, ingresa una nota válida entre 0 y 100.");
    } else {
       
   
        if (nota >= 90) {
            alert("Excelente");
        } else if (nota >= 70) {
            alert("Bueno");
        } else if (nota >= 50) {
            alert("Regular");
        } else {
           alert("Insuficiente");
        }
    }
    }

    /* Octavo  Ejercicio*/
 
  function ejercicio8(){
    let menu = prompt("Ingresa tu numero de pedido 1.pizza, 2.hamburguesa ,3.tacos : ")
   switch(menu){
       case "1":
           alert("Pizza")
           break;
       case "2": 
           alert("Hamburguesa")
           break;
       case "3": 
           alert("Tacos")
           break;
       default:
           alert("Opción no valida")            
   } 
   }

   /* Noveno ejercicio*/
 
 function ejercicio9(){
 
    let lado1 = parseFloat(prompt("Ingresa el primer lado del triángulo:"));
    let lado2 = parseFloat(prompt("Ingresa el segundo lado del triángulo:"));
    let lado3 = parseFloat(prompt("Ingresa el tercer lado del triángulo:"));
    
    
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert("Los lados deben ser números positivos.");
    } else if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        alert("Los lados ingresados no forman un triángulo válido.");
    } else {
        
        
        if (lado1 === lado2 && lado2 === lado3) {
            alert("El triángulo es equilátero.");
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            alert("El triángulo es isósceles.");
        } else {
            alert("El triángulo es escaleno.");
        }
    }
    }

    /* décimo ejercicio*/
 
 function ejercicio10(){
    const numeroSecreto = Math.floor(Math.random() * 10 + 1)
    
    const numeroJugador = parseInt (prompt("Adivina el número secreto entre 1 al 10"));
    
    alert(`Este es el numero con el que juegas ${numeroJugador}`)
    
    if(numeroJugador === numeroSecreto){
        alert("!Felicidades, Adivinaste el número ")
    }else if (numeroJugador < numeroSecreto){
        alert("El numero es demasiado bajo, intenta de nuevo")
    }else {
        alert("El numero es muy alto, intenta de nuevo")
    }
    }

    /* undécimo ejercicio*/
 
 function ejercicio11(){
 
    let precioBase = parseFloat(prompt("Ingresa el precio base del producto:"));
    
    
    if (isNaN(precioBase) || precioBase <= 0) {
        alert("Por favor, ingresa un precio válido.");
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
        
        
        alert("El precio final después del descuento es: $" + precioFinal.toFixed(2));
    }
    }
    
    /* duodecimo ejercicio*/
 function ejercicio12(){
    let año;
  
   año = parseInt(prompt("Ingresa un año : "))
   if((año % 4 == 0) && (año % 100 != 0)){
       alert("El año " + año +" es bisiesto")
   }else{
       if((año % 100 == 0) && (año % 400 == 0)){
           alert("El año " + año + " es bisiesto");
       }else{
           alert("El año "+ año + " no es bisiesto");
       }
   } 
  }

  /* decimotercero ejercicio*/
 
 function ejercicio13(){
    let usuario = prompt("Digite su usuario : ")
    alert("Bienvenido " + usuario)
    
    let contraseña = prompt(" Ingresa tu contraseña : ")
    
    if(contraseña === "1234"){
        alert("Acceso concedido")
    }else{
        alert("Acceso denegado")
    }
    
    }

    /*decimocuarto ejercicio*/
 
 function ejercicio14(){
    let dia = parseInt(prompt("Ingrese la hora (de 0 a 23):"));
    
    
    if (isNaN(dia) || dia < 0 || dia > 23) {
        alert("Por favor, ingresa una hora válida entre 0 y 23.");
    } else {
        
        if (dia >= 6 && dia < 12) {
            alert("Buenos días");
        } else if (dia >= 12 && dia < 18) {
            alert("Buenas tardes");
        } else {
            alert("Buenas noches");
        }
    } 
    }

    /* decimoquinto ejercicio*/
 function ejercicio15(){
 
    let peso = parseFloat(prompt(" Ingresa su peso y altura : "))
    
    if(isNaN(peso) || peso < 0){
        alert("por favor ingresa tu masa corporal.");
    }else{
        if(peso < 18.5){
            alert("Tienes bajo peso")
        }else if(peso >= 18.5 && peso <= 24.9){
            alert("Tienes peso normal")
        }else if(peso >= 25.0 && peso <= 29.9){
            alert("Tienes sobrepeso")
        }else if(peso >= 29.9 && peso <= 30.0){
            alert("Tienes obesidad")
        }else{
            alert("Sufres de obesidad")
        }
    }
    }