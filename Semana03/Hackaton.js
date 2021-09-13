/* Ejercicio #0    (Filtrar miembros únicos del arreglo)
Sea arr una matriz.Cree una función única (arr) 
que debería devolver una matriz con elementos únicos de arr. */
console.log("Ejercicio 0");
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O

console.log("*****************************");
/* Ejercicio # 1  (Filtrar anagramas)
Escriba una función aclean (arr) que devuelva una matriz 
limpia de anagramas.*/
console.log("Ejercicio 1");

function aclean(arr) {
  let unique = new Map();

  arr.forEach(word => {
    let sorted = word.toLowerCase().split("").sort().join("");
    if(!unique.has(sorted)) {
      unique.set(sorted, word);
    }    
  });

  return [...unique.values()];
}

let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(array));

console.log("*****************************");
/*Ejercicio #2 (Claves iterables)

Nos gustaría obtener un arreglo de map.keys () en una variable y luego aplicarle métodos específicos
de la matriz ¿Por qué? ¿Cómo podemos arreglar el código para que funcione keys.push?*/

//Eso es porque map.keys()devuelve un iterable, pero no una matriz.
//Podemos convertirlo en una matriz usando Array.from:

console.log("Ejercicio 2");
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys); // name, more

console.log("*****************************");
/*Ejercicio #3 (Valor del último bucle)
Cuál es el último valor alertado por este código? ¿Por qué?*/
console.log("Ejercicio 3");
let i = 3;

while (i) { 
  console.log( i-- ); //1 es el ultimo valor alertado
} //POorque cuando i se convierte en 0, la condición se vuelve falsa y el ciclo se detiene
console.log("*****************************");
/*Ejercicio #4 (¿Qué valores muestra el ciclo while?)
Para cada iteración del ciclo, escriba qué valor genera y luego compárelo con la solución. Ambos
bucles alert sobre los mismos valores, ¿o no?*/
console.log("Ejercicio 4");
//La forma de prefijo ++ i:
let x = 0;
while (++x < 5) 
console.log(x);
console.log("Incrementa y luego devuelve el valor nuevo");
console.log("*****************************");
/*  ++ está antes de la variable por eso que al llegar a 5 hay un false de 5<5*/

//La forma sufijo i ++
let y = 0;
while (y++ < 5) 
console.log( y);
console.log("incrementa i y luego devuelve el valor anterior");

/*Por lo tanto, la comparación es en realidad while (4 <5) - 
verdadera, y el control pasa a alertar. */
console.log("*****************************");

/*Ejercicio #6 (Establecer y disminuir para contador)
Modifique el código de makeCounter () para que el contador también pueda disminuir y establecer
el número:*/

console.log("Ejercicio 6");

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = value => count = value; //counter.set (value) debe establecer el contador en valor.

  counter.decrease = () => count--; //counter.decrease () debería disminuir el contador en 1.

  return counter;
}
console.log("*****************************");

  /*Ejercicio 08 (Salida de una lista de un solo enlace)*/  
  console.log("Ejercicio 8");
/*Supongamos que tenemos una lista con un solo enlace (como se describe en el capítulo Recurrencia y pila):
let list = {
value: 1,
next: {
value: 2,
next: {
value: 3,
next: {
value: 4,
next: null
}
}
}
};
Escriba una función printList (lista) que genere los elementos de la lista uno por uno.
Haz dos variantes de la solución: usando un bucle y usando la recursividad.
¿Qué es mejor: con recursividad o sin ella?*/

console.log("Usando bucle");
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }

}

printList1(list);

console.log("Usando recursividad");

let list1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

function printList1(list1) {

  console.log(list1.value); // genera el elemento actual

  if (list1.next) {
    printList1(list1.next); // hace lo mismo para el resto de la lista
  }

}

printList(list1);

/*Mas efectivo es el bucle pero el codigo de recursividad es mas corto 
y sencilla de enteder*/