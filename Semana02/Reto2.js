/*Muestra el letrero Usando if..else, escriba el código que obtiene un número a través del
indicador y luego muestra en alerta:
• 1, si el valor es mayor que cero.
• -1, si es menor que cero.
• 0 si es igual a cero*/
var number;
number=prompt("Ingrese el numero que desea comprobar");

if (number>=0) {
    alert('El numero' +number +'es mayor que cero' );
}
else if(number<0) {
    alert('El numero' +number +'es menor que cero' );
}
else if(number==0){
    alert('El numero' +number +'es igual a cero' );
}
else{
    alert('El numero' +number +'no está dentro de los parametros' );
  }
