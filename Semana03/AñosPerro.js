/*Ejercicio 2 (La calculadora de la edad del cachorro)*/
function calculateDogAge() {
    var myAge= document.getElementById('years').value;
    var dogAge = myAge * 7;
   
    document.getElementById('wynik').innerHTML= dogAge + ' años, en años humanos';
    
  }