/*Debe solicitar al usuario 3 números y guardarlos.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje diciendo que los números son iguales.*/

let num1=Number(prompt("Escriba el primer numero"));
let num2=Number(prompt("Escriba el segundo numero"));
let num3=Number(prompt("Escriba el tercer numero"));

if (isNaN(num1)||isNaN(num2)||isNaN(num3)){
  console.log("Digite solo valores numericos")
}
else if (num1==num2 || num2==num3 || num3==num1) {
  console.log ("hay numeros iguales , por favor digite diferentes numeros")
}
else{
let myarray=[num1, num2, num3];

function Validador (array){
  let mayor= array[0];
  let menor=array[0];
for(let i=0;i<array.length;i++){
  if (array[i]>mayor){
     mayor=array[i]
  }
  if( array[i]<menor){
    menor= array[i]
  } 
    
  }
   console.log("El número mayor es " + mayor + " y el número menor es " + menor);
}


function ordenamientoNumeros(unarray) {
  let mayoraMenor = unarray.slice().sort((a, b) => a - b); // Ordenar de menor a mayor
  let menoraMayor = unarray.slice().sort((a, b) => b - a); // Ordenar de mayor a menor
  console.log("Números ordenados de menor a mayor:", mayoraMenor);
  console.log("Números ordenados de mayor a menor:", menoraMayor);
}

Validador (myarray);
ordenamientoNumeros(myarray);
}