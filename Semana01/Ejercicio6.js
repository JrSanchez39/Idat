/*Compruebe si está vacío
Escribe la función isEmpty(obj) que regresa true si el objeto no tiene propiedades, false de lo
contrario.
Debería funcionar así:*/
let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for (let key in obj) {
    }
    return true;
  }