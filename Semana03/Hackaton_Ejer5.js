/*Ejercicio #5 (Reescribir con funciones de flecha)
Reemplace las expresiones de función con funciones de flecha en el siguiente código:*/
/*console.log("Ejercicio 5");*/

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."), //funcion flecha
  () => alert("You canceled the execution.") // funcion flecha
);
console.log("*****************************");