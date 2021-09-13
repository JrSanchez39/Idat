/*Ejercicio #7*/
console.log("Ejercicio 7");
/*Repita hasta que la entrada sea correcta
Escriba un bucle que solicite un número mayor que 100.*/
/*Si el visitante ingresa otro número, pídale que ingrese nuevamente.
El bucle debe solicitar un número hasta que el visitante ingrese un número mayor que 100 o cancele
la entrada / ingrese una línea vacía.
Aquí podemos asumir que el visitante solo ingresa números.
No es necesario implementar un manejo especial para una entrada no numérica en esta tarea.*/
//function Numbervalidate(){

let number =prompt("Ingrese un numero mayor a 100");

for(let i = 100; i>=100;i++){
    
    if(number>100) {
    i=i+1;
    } 

    else {
        
    alert("Ingrese nuevamente un numero correcto, que sea mayor a 100") ; 
         
    }

    alert("El numero ingresado es correcto : "+number);
    break;
}
//}