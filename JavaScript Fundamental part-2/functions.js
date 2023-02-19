//functions:- Basically functions are the piece of code that we can reuse over and over again
//function definition:=
function logger() {
    console.log("My name is Rani");
}

logger();// function invokation,running and calling
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const result = fruitProcessor(4, 5);
console.log(result);
console.log(fruitProcessor(4, 5));

const num = Number('23');