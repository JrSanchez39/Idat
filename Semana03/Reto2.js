/*El geometrizador
Cree 2 funciones que calculen las propiedades de un círculo,
 usando las definiciones aquí. 
 Cree una función llamada calcCircumfrence: Pase el radio a la función.
 Calcule la circunferencia basándose en el radio y emite 
 "La circunferencia es NN". 
 Cree una función llamada calcArea: Pase el radio a la función. 
 Calcule el área basándose en el radio y obtenga "El área es NN". */
 
// const multiply = (num1, num2) => num1 * num2;

//Math.PI
//let radio = prompt ('Ingrese el radio');

 /*function  CalcCircumfrence (radio) { 
    console.log(`La circunferencia es , ${radio}`); 
}
CalcCircumfrence (6);

function CalArea (area){
2*radio;
console.log(`El Area es , ${area}`); 
CalcCircumfrence (radio);
}
CalcArea();*/

function calcCircumfrence(radius) {
    var y = (Math.PI * radius) * 2;
  console.log("La circunferencia es " + y + ".");
  }
  function calcArea(radius) {
    var x = (Math.PI * radius) * radius;
  console.log("El Area es " + x + ".");
  }
  
  calcCircumfrence(15);
  calcArea(25);

  