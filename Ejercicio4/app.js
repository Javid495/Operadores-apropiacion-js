import hello from 'prompt-sync';

const read = hello();

// 5. La operación misteriosa
// Se tiene la expresión matemática siguiente:
// (20 + 10) / 5 + 3∗2−4(20 + 10) / 5 + 3 * 2 - 4(20 + 10) / 5 + 3∗2−4
// Tu reto es implementarla en JavaScript y analizar paso a paso en qué orden se
// ejecutan las operaciones hasta llegar al resultado final.

//Se crea una varible la cual tendra la expresion
let expresión = ((20 + 10) / 5 + 3 * 2 - 4) + ((20 + 10) / 5 + 3 * 2 - 4) + ((20 + 10) / 5 + 3 * 2 - 4)

//Se muestra el resultado
console.log(expresión)