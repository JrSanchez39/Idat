/*Escriba un bucle for que iterará de 0 a 20. Para cada iteración, 
verificará si el número actual es
par o impar, y lo informará en la pantalla (por ejemplo, "2 es par").*/

 for(let i=1;i<=20;i++)
{
    if(i % 2 === 1) continue ;
    console.log(` ${i} es numero par`);
}

    
for(let j=1;j<=20;j++)
    {
    
    if(j % 2 === 0)  continue ;
    
    console.log(` ${j} es numero impar` );
    
    }
 
 

/*Escriba un bucle for que iterará de 0 a 10. Para cada iteración del bucle for, multiplicará el número
por 9 y registrará el resultado  */
for (let k=0; k<=10; k++)
{
mult1=k*9;
console.log(`${k}*9=`+mult1);

}

/*Utilice un bucle for anidado para mostrar las tablas de cada multiplicador del 1 al
10 (100 resultados en total).*/

for(let r=1;r<=10;r++)
{
  
for(let s=1;s<=10;s++)
    {
        mult2=r*s;
        console.log(`${r}*${s}=`+mult2);
    }
}
           

            