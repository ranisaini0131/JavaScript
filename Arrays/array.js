/*
-> In Javascript , Array is an object which holds multiple values in single variable.
-> (Internally array is a object) Everything in Javascript is Object
-> Length of Array in Javascript and the type of it's elements is not fixed
-> Array is a linear Datatype
-> All Array methods are applied on the elements of array
*/

//================ARRAY CREATION======================
let array = []; //Declaration
array = [1, 3, 5, 5, 6];//initialization

const numbers = [1, 2, 3]; //SIMPLE WAY
console.log(numbers);

const number1 = new Array(); //by using constructor // 
console.log(number1);//emply array of length created

const number2 = new Array(1, 4, 6, 3);//passing arguments 
console.log(number2);// 4 length created

const string = new Array("hii", 'Rani');
console.log(string);

const array1 = new Array(5);// empty array of 5 length fixed size 
console.log(array1);

const array2 = Array(5); //difference between above array an this?? (new )
console.log(array2);

const array3 = Array(5, 2, 3);
console.log(array3); // jab ese bhi vhi chizz ho rhi h to new q use kre ??

//mixed array
myArray = [1, "rani", true, null, undefined, { name: "rani", marks: 344 }];
console.log(myArray);

//===================Array Methods========================//

const array4 = [1, 7, 'Rashmi', 99, ["a", "b", "c", "t"], { name: "Praharsh", title: "Architect", Age: 27 }, { name: "Janvi", title: "Historian", Age: 34 }];


console.log(array4);
console.log(array4[5]);
console.log(Array(array4.length - 1));//console it???


//============POP()============
// The pop() method removes (pops) the last element of an array.
// The pop() method changes the original array.
// The pop() method returns the removed element.
console.log(array4.pop());



//============PUSH()===========
// The push() method adds new items to the end of an array.
// The push() method changes the length of the array.
// The push() method returns the new length.
console.log(array4.push(44));



// Array.isArray() is a static property of the JavaScript Array object.
// You can only use it as Array.isArray().
console.log(Array.isArray(array4));


//===============indexOf()=========================
console.log(array4.indexOf(7));// first occurence from beginning
console.log(array4.lastIndexOf("Rashmi"));// first occurence from last

//it return -1 becoz two objects even if they are look similar are never similar so it dosen't match and returns -1
console.log(array4.indexOf({ name: "Praharsh", title: "Architect", Age: 27 }))



console.log(array4.includes(99));//only for primitive data type
console.log(array4.reverse());


//============Shift()=========
// The shift() method removes the first item of an array.
// The shift() method changes the original array.
// The shift() method returns the shifted element.
console.log(array4.shift());


//============Unshift()========
// The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.
console.log(array4.unshift(345));//return new length
console.log(array4);



//==============join();========
// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).
console.log(array4.join());


//============concat()===========
// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.
const a1 = [1, 3, 8, 3];
const a2 = [9, 5, 8, 0];
a3 = a1.concat(a2);
console.log(a3);


//=============join()=joins the seperator between array element and return that as a string
// while concat()= add two different arrays and returns the new array

//===========splice()==============
//works on real array
//can only used on array not on iterable or array-like objects for we have to convert them by using Array.from()
const colours = ["red", "pink", "blue", "green"];
colours.splice(0, 1, "black");
//first arg=index num (start)
//second =how much element
// third arg = added element
console.log(colours);
colours.splice(-1, 1, "cream colour"); // added at the end
console.log(colours);

//==============slice()================
//It returns a brand new array based on old array
//copying all array and 
//first arg= start
//second arg= end but not included
const a = colours.slice(1, 3);
console.log(a);


//==============sort()===========
//it modifies original array
const c = [22, 02, 43, 71, 92, 3, 6];
n.sort();//it sorts alphabetically by assuming all elements as strings
console.log(c);

//===============solution is compare()

//2-3=-1
//2-43=-41
//2-92=-90 negative numbers 
let compare = (a, b) => {
    return a - b; // ascending order
}
n.sort(compare);
console.log(n);

//92-71=21
//92-22=70
//92-2=90 positive numbers in de
let compare1 = (a, b) => {
    return b - a; // descendingn Order
}
n.sort(compare1);
console.log(n);



//===========================High Order Functions(Most used methods of Array)=========================================//

/* map()=it creates a new array after performing operations on each array elements 
Returns a new array
*/

let arr = [45, 23, 21]
// console.log ( arr )
let p = arr.map((value) => {
    console.log(value)
    return value + 1
})
console.log(p);

let q = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + index //it creates new array using these values
})
console.log(q);


/*==================filter(); => Returns an array
Filters an array with values that
passes a test Creates a new array */

let r = arr.filter((a) => {
    return r < 10;
})
console.log(r);


//============reduce(); returns a value
let m = arr.reduce((h1, h2) => {
    return (h1 + h2);
})
console.log(m);
//also write like this
// const reduce_func = (h1, h2) => {
//   return (h1 + h2);
// }
// let z = arr.reduce(reduce_func)
// console.log(z);




//============================Array Loops=================================//

let num = [3, 5, 1, 2]

//===================ForEach Loop
num.forEach((element) => {
    console.log(element * element)
})


//===========Array.from is used for converting iterable objects or array-like objects into real array without coverting them we can't operate objects or array-like objects  as array
let nme = "Harry "
let k = Array.from(nme)
console.log(k);


//=========for.of returns elements
for (let i of num)
    console.log(i);

const n = Array.of(1, 2, 3, 4); //ye array creation hua???
console.log(n);

//===========(for...in) returns indexes
for (let k in num)
    console.log(k); //returns indexes
console.log(num[k]); // give elements
//becoz arrays are objects therefore array indexes are also considered as keys



/*
-> Spread Operator= Used on Iterable objects like array to spread them or copy them
-> Spread operator 1st level hi clone kr pata h due to deep cloning */

const names = ["Ram", "Shyam", ",Meera", "Hira", "Radha"];

const copiedNames = names
names[0] = "laxman";
console.log(copiedNames, names); //changes occur due to shallow copy becoz it has same refrence

names.push("Harshita");
console.log(copiedNames, names);

const prices = [12.33, 45.23, 34.99, 56.90];
console.log(Math.min(prices));//NaN
console.log(Math.min(...prices));

//=================Another Example(Array Object)=======================//

const persons = [{ name: "Max", age: 30 }, { name: "Manuel", age: 31 }];

const copiedPersons = [...persons];

persons.push({ name: "Anna", age: 29 });
persons.push = [1, 4, 0, 0];


//now if like this
// copiedPersons[0] = [{ name: "Anna", age: 40 }];
console.log(persons, copiedPersons);
//age changed becoz we must not forget all the objects copied are the address of old object and we are working with the references,so that the age changes also happened in copiedPersons
// console.log(persons, copiedPersons);



//===========================Array Destructuring=============================//


const data = ["Max", "Schwarz", "Mr", 30, "developer"];


//=========CASE 1=================
const [firstName, lastName] = data;
console.log(firstName, lastName,);

//===========CASE 2===============
const [...fullInfo] = data;
console.log(...fullInfo);

/*
//==========CASE 3================
const [firstName, lastName, gender, age,title] = data;
console.log(firstName, lastName, gender, age, title);//title is undefined becoz not present in main array
//================CASE4=================
const [firstName, lastName, , gender, age, title] = data;
console.log(firstName, lastName, gender, age, title);
//===================CASE5==================
const[firstName, lastName="Ram",gender, age, title]=data;
console.log(firstName, lastName,gender, age, title)//default value not worked here
/*
NOTE:- 
->In Array the identifier which is under rectangle braces should be consoled
-> In array Destructuring sqeuence matters not variable name becoz elements rendered by index number
*/