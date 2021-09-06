/*
¿Const mayúscula?
Examine el siguiente código:
const birthday = '18.04.1982';
const age = someCode(birthday);
Aquí tenemos una constante birthday date y age se calcula a partir de birthday con la ayuda de
algún código (no se proporciona por brevedad y porque los detalles no importan aquí).
¿Sería correcto usar mayúsculas para birthday? para age? ¿O incluso para ambos?
const BIRTHDAY = '18.04.1982'; // make uppercase?const AGE = someCode(BIRTHDAY); //
make uppercase?
*/
const birthday = '18.04.1982';
const age = someCode(birthday);

/* Rpta: 
Se usa cuando el valor se conoce antes de la ejecución y se escribe directamente en el código.
birthay en minuscula y AGE en mayusucula
 */