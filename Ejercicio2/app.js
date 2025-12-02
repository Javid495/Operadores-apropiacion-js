import leo from 'prompt-sync';

const hola = leo();

// 2. Las tres notas del estudiante
// Un aprendiz obtuvo tres notas en sus evaluaciones.Necesita calcular el promedio
// para saber cómo le fue en la asignatura.Crea un programa que, a partir de tres
// valores numéricos, muestre el promedio en pantalla.

//Se crean las variables de la notas asignando un valor a cada uno
let nota1 = parseInt(hola("ingrese la nota #1:  "));
let nota2 = parseInt(hola("ingrese la nota #2:  "));
let nota3 = parseInt(hola("ingrese la nota #3:  "));


//Se calcula el promedio de las 3 notas
let Promedio = (nota1 + nota2 + nota3) / 3;

//Se imprime el resultado
console.log(`El promedio de la notas del estudiante es de: ${Promedio}`);