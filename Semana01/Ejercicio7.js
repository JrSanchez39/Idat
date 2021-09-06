/*Tenemos un objeto que almacena los sueldos de nuestro equipo:
let salaries = {
John: 100,
Ann: 160,
Pete: 130
}*/
let salaries={John:100, Ann:160, Pete:130};
/*Escriba el código para sumar todos los salarios y guárdelo en la suma variable. Debería ser 390
en el ejemplo anterior*/
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
    }

console.log(sum); 

/*Si salaries está vacío, entonces el resultado debe ser 0.*/
