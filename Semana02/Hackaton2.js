/*EJERCICIO 0*/
/*Tienes una variedad de user objectos, Cada uno tiene name, surname y id.
Escriba el código para crear otra matriz a partir de él, de objetos con id y fullName, donde fullName se genera a partir de name y surname.*/

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log( usersMapped[0].id ); // 1
console.log (usersMapped[0].fullName ); // John Smith

/*EJERCICIO 1*/
/*¿Qué va a mostrar este código?*/

let fruits = ["Apples", "Pear", "Orange"];// insertar un nuevo valor en la "copia"
let shoppingCart = fruits;shoppingCart.push("Banana");// ¿Qué hay en las frutas? 
console.log( fruits.length ); // muestro el numero 4 

/*Ejercicio 2 */

/*Operaciones de arreglos*/
/*1. Crea un arreglo styles on los items “Jazz” y “Blues”.*/
let styles = ["Jazz", "Blues"];
/*2. Adjunta “Rock-n-Roll” al final*/
styles.push("Rock-n-Roll");
/*3. Reemplaza el valor en el medio por “Classics”. Su código para encontrar el valor medio debería funcionar para cualquier arreglo con longitud impar.*/
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
/*4. Quita el primer valor del arreglo y muéstralo.*/
console.log( styles.shift() );
/*5. Anteponer Rap y Reggae en el arreglo*/
styles.unshift("Rap", "Reggae");

/*Ejercico 3 */
/*Escribe la función sumInput() esta:
Pregunta al usuario por valores usando prompt y almacena los valores en el arreglo. 
Termina de preguntar cuando el usuario ingresa un valor no numérico, una cadena vacía o presiona “Cancelar”.
• Calcula y devuelve la suma de elementos del arreglo.
PD. Un cero 0 es un número válido, no detenga la entrada en cero.*/
function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("Un numero porfavor?", 0);
  
        if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  console.log( sumInput() );

/*Ejercicio 4 */

/*Escribe una función filterRange(arr, a, b) que obtiene una matriz arr, 
busca elementos con valores mayores o iguales a ay menores o iguales ab y devuelve un resultado como una matriz.
La función no debería modificar la matriz. Debería devolver la nueva matriz. */

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered ); // 3,1 (valores que coinciden)
console.log( arr ); // 5,3,8,1 (no modificado)

/*Ejercicio 5 */
/*Copiar y ordenar el arreglo
Tenemos una variedad de cadenas arr. Quisiéramos tener una copia ordenada, pero no la modificamos.
Crea una función copySorted(arr) que devuelve tal copia.*/

/*Usando slice */
function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let arr = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr);
  
 console.log (sorted );
  console.log( arr );

  /*Ejercicio  6*/
  /*Crea una función constructora Calculator que crea objetos de calculadora "extensibles".
La tarea consta de dos partes.
Primero, implemente el método calculate(str) que lleva una string como "1 + 2" 
en el formato “Numero operator Numero” (delimitado por espacios) y devuelve el resultado. 
Debe entender más + y menos -.*/

function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

  /*Ejercicio 8 */
/*Reescriba 'if..else' en '?'
Reescriba if..else usando múltiples operadores ternarios '?'.
Para facilitar la lectura, se recomienda dividir el código en varias líneas. */

let mensaje;
if (login == 'Empleado') {
mensaje = 'Hola';
} else if (login == 'Director') {
mensaje = 'Saludos';
} else if (login == '') {
mensaje = 'Sin inicio de sesión';
} else {
mensaje = '';
}

let message = (login == 'Empleado') ? 'Hola' :
  (login == 'Director') ? 'Felicidades' :
  (login == '') ? 'Sin sesión' :
  '';
