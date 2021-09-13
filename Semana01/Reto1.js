let name = prompt ('Ingrese su nombre');
let height = prompt ('Ingrese su peso');
let weight= prompt ('Ingrese su altura');

mc=height/weight**2;

if (mc<18.5){
    alert('Hola ' +'' +name +' tu indice de masa corporal es: ' +mc +' ' +' Tu peso es inferior al normal');
   
}
else if(mc>18.5 & mc<24.9){
    alert('Hola ' +'' +name +' tu indice de masa corporal es: ' +mc +' ' +' Peso normal' );  
    
}
else if (25<mc & mc<29.9){
   alert('Hola ' +'' +name +' tu indice de masa corporal es: ' +mc + +' ' +' Peso superior al normal' );
 
}
else if(mc>30){
    alert('Hola ' +'' +name +' tu indice de masa corporal es: ' +mc +' ' +' Estas con obesidad');
    
}
else {
    alert('error');
}

