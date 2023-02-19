// Iteration: The for Loop
// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jonass = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];
// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist
for (let i = 0; i < jonass.length; i++) {
    // Reading from jonas array
    console.log(jonass[i], typeof jonass[i]);
    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonass[i]);
}
console.log(types);
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);
// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonass.length; i++) {
    if (typeof jonass[i] !== 'string') continue;
    console.log(jonass[i], typeof jonass[i]);
}
console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonass.length; i++) {
    if (typeof jonass[i] === 'number') break;
    console.log(jonass[i], typeof jonass[i]);
}
///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
// 0, 1, ..., 4
// 4, 3, ..., 0
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}
///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}