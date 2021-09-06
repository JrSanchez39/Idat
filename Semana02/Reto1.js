const data=[ 
    { 
        idiom: "Español", 
        text: "Bienvenido al curso de React Native en PachaQtec",
        id: 1, 
    },
    {   idiom: "Ingles",
        text: "Welcome to the React Native course at PachaQtec",
        id : 2, },
     { 
         idiom:"Francés", 
         text: "Bienvenue dans le cours React Native chez PachaQtec", 
         id: 3, 
    }, 
    { 
        idiom:"Italiano",
        text: "Benvenuti al corso React Native presso PachaQtec",
        id: 4, 
    }, 
    { 
        idiom:"Portugués", 
        text: "Bem-vindo ao curso React Native na PachaQtec", 
        id: 5, 
    }
 ]
 const identifyIdiom=(data, text)=>{

    const isInclude = textincludes(data.text);
    if (isInclude) return data.idiom;
  }
  datalist.find(identifyIdiom);
  /*identifyIdiom (datalist, 'Welcome to the React Native course at PachaQte')*/
 
switch(identifyIdiom)

{
case 1: 
document.write('Bienvenido al curso de React Native en PachaQtec');
document.write('El texto esta en Español');
break;

case 2: 
document.write('Welcome to the React Native course at PachaQte');
document.write('El texto esta en Ingles');
break;

case 3: 
document.write('Bienvenue dans le cours React Native chez PachaQtec');
document.write('El texto esta en Frances');
break;

case 4: 
document.write('Benvenuti al corso React Native presso PachaQtec');
document.write('El texto esta en Italiano');
break;

case 5: 
document.write('Bem-vindo ao curso React Native na PachaQtec"');
document.write('El texto esta en Portugues');
break;

}