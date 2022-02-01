
 
/*"Dado un arreglo de números enteros, Imprimir solamente aquellos que
 son denominados números primos, usando arreglo denominado como
 ejercicio1").*/


/*
---------------------------------------------------------------------
---------------------------------------------------------------------*/
console.log("Ejercicio 1");
console.log("***Numeros primos***");

const ejercicio1 = [3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24];




ejercicio1.forEach(element=>{
    if(primo(element)){
        console.log(element + "   es primo");
    }
}); 




function primo(numero) {
  if (numero == 1) {
    return false;
  }   
  else  {
    for (var i = 2; i < numero; i++){
        if (numero % i == 0) {
            return false;
        
        }
            else {
                return true
            }
    }    
  }
}

 
  /* Ramón quiere hacer una fiesta privada en donde solo entre un número
 exclusivo de personas, ayudale al portero a solo dejar pasar a
 aquellas personas mayores de edad que sean familiares de Ramón. (con
 imprimir los usuarios que se admitirán basta, usar el arreglo
 denominado como "ejercicio2").

---------------------------------------------------------------------
---------------------------------------------------------------------*/


console.log("Ejercicio 2");
console.log("***Invitados a la fiesta de Ramon***");

  const ejercicio2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "Maria",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];
  

//let invitados = []



    for (let i = 0; i < ejercicio2.length; i++) {
        if (ejercicio2[i].edad >= 18 && ejercicio2[i].esFamiliar){
        
           console.log(ejercicio2[i].nombre)
            //invitados.push(ejercicio2[i].nombre);
            
        }
    }

//console.log(invitados);
 /*Con ayuda de ciclos imprime los primeros 50 números de la suceción de
 fibonacci, (1,1,2,3,5,8,13,21).
  ---------------------------------------------------------------------
---------------------------------------------------------------------*/
console.log("Ejercicio 3");
console.log("***Sucesion fibonacci***");

let fibo = 1;
let fibo1 = 0;
let fibo2 = 0;

//Imprimo fibo inicial
console.log( fibo);

fibo1 = fibo;

for (let i = 0; i < 50; i++) {
    fibo = fibo1 + fibo2;

    //Imprimo fibo siguiente
    console.log( fibo);

    fibo1 = fibo2;
    fibo2 = fibo;
    
}



if (fibo2 = 0){

}





