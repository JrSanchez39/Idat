/*Multiplica los valores numéricos de las propiedades por 2
Crea una función multiplyNumeric(obj) que multiplica todos los valores numéricos de
propiedad de obj por2.
Por ejemplo:*/
// before the call
let menu = {
 width: 200,
 height: 300,
 title: "My menu"
};
multiplyNumeric(menu);
// after the call
menu = {
 width: 400,
height: 600,
 title:
"My menu"
};
/*Tenga en cuenta que multiplyNumeric no necesita devolver nada. 
Debería modificar el objeto insitu.
PD Usar typeof para buscar un número aquí*/
function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }