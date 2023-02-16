// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
// Assignment operators
let u = 10 + 5; // 15
u += 10; // x = x + 10 = 25
u *= 4; // x = x * 4 = 100
u++; // x = x + 1
u--;
u--;
console.log(u);
// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
////////////////////////////////////
// Operator Precedence
const now1 = 2037;
const ageJonas1 = now - 1991;
const ageSarah1 = now - 2018;
console.log(now - 1991 > now - 2018);
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
