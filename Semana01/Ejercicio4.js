/*Cadenas
¿Cuál es el resultado del script?
let name = "Ilya";
alert( `hello ${1}` ); // ?
alert( `hello ${"name"}` ); // ?
alert( `hello ${name}` ); // ?*/

let name = "Ilya";
/*la expresion es un numero*/
console.log( `hello ${1}` ); // ? muestra Hello 1
/*la expresion es un string*/
console.log( `hello ${"name"}` ); // ? muestra hello name
/*la expresion es una variable*/
console.log( `hello ${name}` ); //? muestra hello Ilya