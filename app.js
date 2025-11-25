//1. El terreno rectangular
// Un agricultor tiene un terreno rectangular y conoce su base y su altura en metros.
// Quiere calcular tanto el área como el perímetro del terreno para cercarlo y sembrar.
// Diseña un programa en el que él pueda obtener ambos valores.

//Se crean las variables de base y altura asignando valores a cada uno
let altura = 14;
let base = 9;

//Se realiza la siguiente operacion para encontrar el area
let area = base * altura;
//Se realiza la siguiente operacion para encontrar el perimetro
let perimetro = (2 * base) + (2 * altura);

//Se muestra el resultado
console.log(`El area del terreno es de: ${area}
             El Perimetro es de: ${perimetro}`);


// 2. Las tres notas del estudiante
// Un aprendiz obtuvo tres notas en sus evaluaciones.Necesita calcular el promedio
// para saber cómo le fue en la asignatura.Crea un programa que, a partir de tres
// valores numéricos, muestre el promedio en pantalla.

//Se crean las variables de la notas asignando un valor a cada uno
let nota1 = 3;
let nota2 = 6;
let nota3 = 5;

//Se calcula el promedio de las 3 notas
let Promedio = (nota1 + nota2 + nota3) / 3;

//Se imprime el resultado
console.log(`El promedio de la notas del estudiante es de: ${Promedio}`);

// 4. El contador de visitas
// Un sitio web comienza con un contador de visitas en 100. En un día recibe 25
// visitas adicionales, luego pierde 10 por un error de registro, y finalmente se
// duplican las visitas.Representa esta situación y determina cuál es el valor final del
// contador

//Se crea la variable visitas asignadole un valor de 100
let visitas = 100;

//Se van haciendo las operaciones establecidas
visitas = visitas + 25;
visitas = visitas - 10;
visitas = visitas * 2;

//Se muestra el resultado
console.log(`El total de visitas actuales es de: ${visitas}`);


// 5. La operación misteriosa
// Se tiene la expresión matemática siguiente:
// (20 + 10) / 5 + 3∗2−4(20 + 10) / 5 + 3 * 2 - 4(20 + 10) / 5 + 3∗2−4
// Tu reto es implementarla en JavaScript y analizar paso a paso en qué orden se
// ejecutan las operaciones hasta llegar al resultado final.

//Se crea una varible la cual tendra la expresion
let expresión = ((20 + 10) / 5 + 3 * 2 - 4) + ((20 + 10) / 5 + 3 * 2 - 4) + ((20 + 10) / 5 + 3 * 2 - 4)

//Se muestra el resultado
console.log(expresión)