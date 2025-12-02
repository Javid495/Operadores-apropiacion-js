import leo from 'prompt-sync';

const hola = leo();

// 4. El contador de visitas
// Un sitio web comienza con un contador de visitas en 100. En un día recibe 25
// visitas adicionales, luego pierde 10 por un error de registro, y finalmente se
// duplican las visitas.Representa esta situación y determina cuál es el valor final del
// contador

//Se crea la variable visitas asignadole un valor de 100
let visitas = parseInt(hola("Ingrese la visitas actuales de la pagina web: "));

//Se van haciendo las operaciones establecidas
visitas = visitas + 25;
visitas = visitas - 10;
visitas = visitas * 2;

//Se muestra el resultado
console.log(`El total de visitas actuales es de: ${visitas}`);