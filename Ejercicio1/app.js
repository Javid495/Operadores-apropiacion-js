import hola from "prompt-sync";

const leo = hola();

//1. El terreno rectangular
// Un agricultor tiene un terreno rectangular y conoce su base y su altura en metros.
// Quiere calcular tanto el área como el perímetro del terreno para cercarlo y sembrar.
// Diseña un programa en el que él pueda obtener ambos valores.

//Se crean las variables de base y altura asignando valores a cada uno
let altura = parseInt(leo("Ingrese la altura del rectangulo: "));
let base = parseInt(leo("Ingrese la base del rectangulo: "));

//Se realiza la siguiente operacion para encontrar el area
let area = base * altura;

//Se realiza la siguiente operacion para encontrar el perimetro
let perimetro = (2 * base) + (2 * altura);

//Se muestra el resultado
console.log(`El area del terreno es de: ${area}
             El Perimetro es de: ${perimetro}`);

