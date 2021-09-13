/*Ejercicio2*/

function mascota(edad_humana){
    var calcular = edad_humana * 7;	
  
  var mensaje_resul = "Su masconta tiene " + calcular + " años en edad canina";
  
  return mensaje_resul;
  
  }
  
  var edad_humana = prompt("Introduzca la edad de la mascota: ", "");
  
  var resultado = mascota(edad_humana);
  
  alert(resultado); 