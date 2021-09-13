  
// let t = 16; // t is a number
// let t = "Teresa" // t is a string
// let t = true // t is a boolean
// let t; // t is a undefined
// let t = null // t is a null
// let t = {} // t is a object
// let t = [] // t is a array

// // numbers

// let num1 = 93;
// let num2 = 93.00;
// let num3 = 977e8; // 977000000
// let num4 = 977e-8; // 0.000000977
// let num5 = 999999999999999999; // 999999999999999999
// let num6 = 9999999999999999999; // 1000000000000000000;

// let num7 = 5 / 0 // Infinity 1.797693134862315E+308
// let num8 = -5 / 0 // -Infinity; -1.797693134862315E+308

// let x = 20 / "fish" // NaN 

// // strings

// let singleQuote = 'I\'m a single quote';
// let doubleQuote = "I'm a double quote";

// // boolean

// let y = 500 > 10; // true

// let z = 4 < 2; // false

// 5 == 5 // true
// 500 = 400 // false

// "1" == 1 // true
// "1" === 1 // false
// let isStudent = true;

// // Arrays

// let arr = ["APPLE", "pear", "orange"];
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [false,true, {number: 1}];

// // Objects
// // name: value pairs
// let obj = {
//     name: "Teresa",
//     age: 23,
//     isStudent: true,
//     "name": "Pedro"
// };

// let name = 'Surf' + 5 + 3;

// // Surf53;

// let number8 = 5 + 3 + "Surf";

// // 8Surf;
let name = 'Daniel'
console.log('Hola, ' + name);
console.log("Hola name");
console.log(`Hola, ${name}`);

let poem = "The wide Ocean";
const author = "Pablo Neruda";

const favesPoemLiteral = `My favorite poem is ${poem} by ${author}`;
const favesPoem = poem + " by " + author;

console.log(favesPoemLiteral);
console.log(favesPoem);

const stringPrimitive = "dog cat fish";


console.log(typeof stringPrimitive);

const stringObject = new String("I'm a string");
console.log(typeof stringObject);


console.log(stringPrimitive[0]); // ["I", "'", "m" , "a"  , "s", tring]
console.log(stringPrimitive.charAt(0));
console.log(stringPrimitive.indexOf('are'));
console.log(stringPrimitive.lastIndexOf('a'));
console.log(stringPrimitive.slice(8, 11));
console.log(stringPrimitive.length);
console.log(stringPrimitive.toUpperCase());
console.log(stringPrimitive.toLowerCase());
console.log(stringPrimitive.split("-", 2))
console.log(stringPrimitive.trim());

const newString = stringPrimitive.replace(/dog/gi, 'Eagle');

console.log(newString)

// implicit conversion
// substraction

console.log("15" - "10" );
// Modulo

console.log("15" % "10");

// concatenation

console.log("15" + "10");
const numberExample= 49;
const stringValue = String(numberExample);
console.log(true)
console.log(numberExample.toString());
console.log(typeof stringValue)
console.log(typeof  numberExample)

const value = false;
console.log(Number(value));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(2000));
console.log(Boolean(" "));
console.log(Boolean("hOLA"));
console.log(Boolean("0"));

var user;
user = "daniel";

var user = 'soto';

let username = "dan";

const sum = () => {
    const sumTotal = 10;
    return sumTotal;
}

const age = 23;
// PascalCase // Components in React // Class Javascript 
const AgeFrom = 23;
// camelCase // Variables / Functions in Javascript
const ageFrom = 22;
// snake_case // Variables / Functions

// kebab-case // Variables / Functions

let x = 100;

const car = {
    price: 15000,
    color: "red"
}

car.color = "blue";

console.log(car);
// Arithmetic Operators
// addition +
var sum1 = 5.7;
var sum2 = 10.1;
var sumTotal = sum1 + sum2;
console.log(sumTotal);

// subtraction -
console.log(10-1);

// multiplication *
console.log(10*1);

const price = 20.50;
const taxRate = 0.082

// calculate the tax

let totalPrice = price + (price * taxRate);
let fixedPrice = totalPrice.toFixed(2);

console.log("Total:", fixedPrice)

// division /
console.log(10/2);

// modulo %
console.log("modulo % 5", 12 % 5);
console.log("resto % 5", -12 % 5);

// exponentiation **
// increment ++
let increment = 7;
let prefix = ++increment;
console.log(prefix)
// decrement --
let position = 7;
let postfix = position--;
console.log(postfix)

// sufijo
let aa = 7;
let bb = aa--;

console.log(bb)
console.log(aa)

// prefijo
let cc = 3;
let dd = --cc;
console.log(cc)

console.log(dd)




// Assignment Operators
// Assignment =
// Addition +=
let carPrice = 15000;

carPrice += 1000;

console.log(carPrice)
// Subtraction -=
// Multiplication *=
// Division /=
// Modulo %=
// Exponentiation **=

// first multiply , then add

console.log(10 + 3 * 5);

// first add , then multiply
console.log((10 + 3) * 5);

// level of precedence
// Parentheses ()
// Increment ++
// Decrement --
// Exponentiation **
// Multiplication *
// Division /
// Addition +
// Subtraction -

// { name||key: value (pairs)}

const person = {
    name: "Daniel",
    surname: "Soto",
    age: 23,
    position: "Developer",
    salary: 15000,
    isMarried: true,
    children: ["Daniel", "Soto"],
    location: "Lima",
    greet: function() {
        console.log(`Hola, my name is ${this.name}`);
    }
}
// dot Notation
console.log(person.name);

// Bracket Notation
console.log(person["name"]);
person.greet();

person.age = 28;
person["age"] = 19;


person.coding = function () {
    return `Daniel coding in ${this.location}`
}

delete person.coding;
console.log(person);


for (let key in person) {
    console.log(`${key.toUpperCase()}: ${person[key]}`);
}

const keysPersonValue = Object.keys(person);

console.log(keysPersonValue);

const note = {
    id: 1,
    title: "Title",
    body: "Body",
    date: "2020-05-05",
}

let date = new Date();
// desscructure properties in to variables
const {id, title, body, date: noteDate} = note;

console.log(noteDate);

let array1 = [];
// literal object
const dog = {}
// consturctor Object

const cat = new Object();

// stactic method
const horse = Object.create({ });

const dog1 =dog ;
const dog2 = dog;

console.log(dog1 === {});


const original = {
    hello : 'world'
}

// const clone = Object.assign({}, original);

// console.log(clone === original)

// spread operator

const clone = { ...original, hola: 'mundo' };

console.log(clone)


function Boat(name, color) {
    this.name = name;
    this.color = color || "non color";
    this.created = new Date();
    
    this.horn = function () {
        console.log(this.name);
    }
}

const sally = new Boat("Sally", "blue");
const molly = new Boat("Molly")
sally.horn();

console.log(sally)
console.log(molly)




class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

const newPerson = new Person("Daniel", "Soto");


console.log(newPerson)


let myObjectLiteral = {
    suma: (xy,yy) => {
        let result = xy + yy;
        console.log(`El resultado de la suma de ${xy} + ${yy} = ${result}`)
    }
}

myObjectLiteral.suma(5, 5);
