/*Ejercicio #0    (¿Volver a resolver una promesa?) */
    
let promise = new Promise(
    function(resolve, reject) {
    resolve(1);
     setTimeout(() => resolve(2), 1000);
    });
    promise.then(console.log);
     //solo toma la primera llamada e ignora la segunda

    
 /*Ejercicio #1 (Retrasar con una promesa) */

     function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      delay(3000).then(() => console.log('runs after 3 seconds'));

/*Ejercicio #2    (Promesa: luego vs atrapar) */

//promise.then(f1).catch(f2); 
//La diferencia es que si ocurre un error en f1, entonces es manejado por .catch
//Versus:
//promise.then(f1, f2); // aqui no hay problema de continuacion
// Por lo tanto no son iguales

/*Ejercicio #3   (Reescribir usando async / await)  */

/*async function loadJson(url) { // (1) La función loadJson se vuelve async.
    let response = await fetch(url); // (2) Todo lo que está dentro de .then es reemplazado por await.

  
    if (response.status == 200) {
      let json = await response.json();
      /* (3) Podemos devolver return response.json() en lugar de esperar
       por él Entonces el código externo tendría que esperar que la promesa se resuelva. 
       En nuestro caso eso no importa.   */
   // }

   // throw new Error(response.status);
 // }
  
 // loadJson('no-such-user.json')
   // .catch(console.log); 
    /* Error: 404 (4) El error arrojado por loadJson es manejado por .catch. 
    No podemos usar await loadJson(…) allí, porque no estamos en una función async.*/

       
/*Ejercicio #5  (Llamar a async desde no async) */    
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // shows 10 after 1 second
  wait().then(result => console.log(result));
}

f();

/*Ejercicio #6  (Error en setTimeout)*/

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Oops!");
  }, 1000);
}).catch(console.log);

/*Hay un "try..catch implícito" alrededor del código de la función. 
Entonces se manejan todos los errores síncronos.
Pero aquí el error se genera no mientras se ejecuta el ejecutor, sino más tarde. Entonces la promesa no puede manejarlo. */

/*Ejercicio #7 (Salida cada segundo) */
/*Usando setInterval: */
function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function() {
   console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

// uso:
printNumbers(5, 10);

/* Si también queremos que la función se ejecute inmediatamente,
 entonces podemos agregar una llamada adicional en una línea separada, 
 como esta:

*/

function printNumbers(from, to) {
  let current = from;

  function go() {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }

  go();
  let timerId = setInterval(go, 1000);
}

printNumbers(5, 10);