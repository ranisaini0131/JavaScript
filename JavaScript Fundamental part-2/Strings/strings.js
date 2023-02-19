//Definition:-collection of characters
//used to store and manipulate text
//indexing starts from 0

//=================CREATION===============
const way1 = `rani`; //backticks
const way2 = "rani";
const way3 = 'rani';
console.log(way1, way2, way3);
console.log(way1[0]);

const firstNaame = new String();
console.log(firstNaame);

var string = "thi's";
var string1 = 'thi"s';
var string3 = `th'is`; //backticks
console.log(string, string1, string3);


//==================Template literals===============
//Part of Modern JavaScript 
//it uses backtics instead of quotes to define a string.
//we can put variable directly in template literals.this is calles string interpolation
const Namee = "radhika";
console.log(Namee.length);
console.log(`Hloo ${Namee}`);


//=================Escape sequence===============
let fruitts = 'Ban\'ana';
console.log(fruitts);
//  \n=new line
//   \t=tab
//  \r=carriage return

//================Methods================
const sentences = "my name is rani.My fav food is chinese";

console.log(sentences.indexOf("is", 10));
console.log(sentences.lastIndexOf("food"));
console.log(sentences.indexOf(0));
console.log(sentences.slice(3, 7));
console.log(sentences.substring(0, 7));
console.log(sentences.replace("rani", "pooja"));
//concat same as array
//trim()=cuts the whitespaces
//trimStart()=cuts the whitespaces from strat
//trimEnd()=cuts the whitespaces from end
//toUpperCase()=all in capital
//toUpperCase()=all in capital
//include()
console.log(sentence.charAt(1));

//========NOTE=================
// name[2]="u";
//can't dothis in javascript string 
//becoz strings are immutable
//original string never changed rather then ne string can be given




//Definition:-collection of characters
//used to store and manipulate text
//indexing starts from 0

//=================CREATION===============
const way11 = `rani`; //backticks
const way22 = "rani";
const way33 = 'rani';
console.log(way11, way22, way33);
console.log(way1[0]);

const firstName = new String();
console.log(firstName);

var string = "thi's";
var string1 = 'thi"s';
var string3 = `th'is`; //backticks
console.log(string, string1, string3);


//==================Template literals===============
//Part of Modern JavaScript 
//it uses backtics instead of quotes to define a string.
//we can put variable directly in template literals.this is calles string interpolation
const Name = "radhika";
console.log(Name.length);
console.log(`Hloo ${Name}`);


//=================Escape sequence===============
let fruits = 'Ban\'ana';
console.log(fruits);
//  \n=new line
//   \t=tab
//  \r=carriage return

//================Methods================
const sentence = "my name is rani.My fav food is chinese";

console.log(sentence.indexOf("is", 10));
console.log(sentence.lastIndexOf("food"));
console.log(sentence.indexOf(0));
console.log(sentence.slice(3, 7));
console.log(sentence.substring(0, 7));
console.log(sentence.replace("rani", "pooja"));
//concat same as array
//trim()=cuts the whitespaces
//trimStart()=cuts the whitespaces from strat
//trimEnd()=cuts the whitespaces from end
//toUpperCase()=all in capital
//toUpperCase()=all in capital
//include()
console.log(sentence.charAt(1));

//========NOTE=================
// name[2]="u";
//can't dothis in javascript string
//becoz strings are immutable
//original string never changed rather then ne string can be given
