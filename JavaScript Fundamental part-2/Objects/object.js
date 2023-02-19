//Definition:-used for storing all types of data

//============Creation==================
const personInfo = {
    name: "Prachi",
    age: 23,
    title: "developer"
};

// personInfo.salary = 34000;this will work only when the object is empty and we have to add properties
personInfo['food'] = "chinese";//add like this
console.log(personInfo);
console.log(personInfo.salary);//not existed property returns undefined
console.table(personInfo);// ALL PROPERIES IN TABULAR FORM

//===========Creation by using new keyword===========
const person = new Object();
person.name = "Saya";
person.age = 34;
person.designation = "trainer";
console.log(person.age);

//============mixed object===============
const myObj = {
    name: "Rani",
    isActive: true, //boolean
    marks: [1, 2, 4, 5],
    favThings: {
        favFlower: "Rose",
        favColour: "Red",
        favFood: "Chinese",

    },
    1.5: "hello", //number can also b keys 
}
const keyName = 'firstName';
console.log(myObj[keyName]);
// console.log(myObj);
// console.log(myObj.favThings);
// console.log(myObj.favThings.favFlower);
console.log(myObj['name']);//accessing element by square brackets


//================Accessed=======================
//Elements can be accesses by two ways:-
//1.By using(.) operator
//2.By using [''] square brackets but not recomended way



//============Deletion=========================
delete myObj.isActive;
console.log(myObj);

//returns true if property present otherwise false
console.log('isActive' in myObj);
console.log('name' in myObj);


//====================HIGH ORDER FUNCTION==================//



//======================call()====================//
//Method Reuse
// With the call() method, you can write a method that can be used on different objects.

//The call() method is a predefined JavaScript method.
// With call(), an object can use a method belonging to another object.

const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person01 = {
    firstName: "John",
    lastName: "Doe"
}
const person02 = {
    firstName: "Mary",
    lastName: "Doe"
}

// This will return "John Doe":
// The example below calls person.fullName with person1 as an argument, this refers to person1, even if fullName is a method of person:
console.log(person.fullName.call(person01));



// The call() method can accept arguments:
const persons = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const persons01 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(persons.fullName.call(persons1, "Oslo", "Norway"));




function calSalarywithBonus(bonus) {
    this.salary = this.salary + bonus;
    console.log(`${this.name}'s Salary After Bonus is ${this.salary}`)
}

var employee1 = {
    name: "John",
    salary: 5000
}
var employee2 = {
    name: "Alex",
    salary: 5000
}
calSalarywithBonus.call(employee1, 34555);
calSalarywithBonus.call(employee2, 567);


//==========================apply()=====================//

// Method Reuse
// With the apply() method, you can write a method that can be used on different objects.


// The apply() method is similar to the call() method (previous chapter).

const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "Mary",
    lastName: "Doe"
}

// This will return "Mary Doe":
console.log(person.fullName.apply(person1));


// The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// The apply() method is very handy if you want to use an array instead of an argument list.

// The apply() method accepts arguments in an array:
const person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const personn1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(persons.fullName.apply(persons1, ["Oslo", "Norway"]));



// Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.

console.log(Math.max(1, 2, 3));  // Will return 3
console.log(Math.max.apply(" ", [1, 2, 3])); // Will also return 3


// JavaScript Strict Mode
// In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.



//========================bind()=========================//

// it prepares a functionfor future execution
// returns a new function object in the end


const person001 = {
    fullName: function (city, country) {
        console.log(this.firstName + " " + this.lastName + "," + city + "," + country);
    }
}

const persons1 = {
    firstName: "John",
    lastName: "Doe"
}

// console.log(persons.fullName.call(persons1, "Oslo", "Norway")); //directly called

let bindKeyword = persons.fullName.bind(persons1, "BHOPAL", "M.P.");
// console.log(bindKeyword);
bindKeyword();



function csdggh(bonus) {
    this.salary = this.salary + bonus;
    console.log(`${this.name}'s Salary After Bonus is ${this.salary}`)
}

var employee1 = {
    name: "John",
    salary: 5000
}
var employee2 = {
    name: "Alex",
    salary: 5000
}
// calSalarywithBonus.call(employee1,34555);
// calSalarywithBonus.call(employee2,567);

var calSalFunc = calSalarywithBonus.bind(employee1);
console.log(calSalFunc);


//==========================Spread Operator=================//

const person = {
    name: "Max",
    hobbies: ['Sports', 'Cooking'],
    age: 23
}
// console.log(person);

const copiedPerson = person;
person.age = 31;
// console.log(copiedPerson,person);
//changes also seen in copiedPerson becoz both object refering same object

const otherPerson = { ...person };
person.age = 45;

// console.log(otherPerson,person);
//not changed in otherperson becoz it copied the key-value pairs of old person before person.age=45; 

//spread Operator k baad koi bhu changes honge to vo sirf main me honge copied me nhi becoz of deep copying


const a = {
    foods: {
        dinner: 'Pasta'
    }
}
let b = { ...a }
b.foods.dinner = 'Soup' // changes for both objects
console.log(b.foods.dinner) // Soup
console.log(a.foods.dinner) // Soup //shallow copy




//===============================assign()========================
//This was mostly used before the spread operator was around, and it basically does the same thing.
const person2 = Object.assign({}, person);
person.name = "Manuel";
console.log(person, person2);//not chnged due to deep copy 
person2.age = 67;
console.log(person, person2);//not chnged due to deep copy

  //target and source
  //target used setter and source used getter function
  //work of assign is to assign source value into target.
