// Introduction to Objects
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
///////////////////////////////////////
// Dot vs. Bracket Notation
const jonnas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonnas);
console.log(jonnas.lastName);
console.log(jonnas['lastName']);
const nameKey = 'Name';
console.log(jonnas['first' + nameKey]);
console.log(jonnas['last' + nameKey]);
// console.log(jonas.'last' + nameKey)
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);
// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
///////////////////////////////////////
// Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // }
    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYeah;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());

