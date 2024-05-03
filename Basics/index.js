
// This is a single line comment
console.log("Hello World");       
let name = 'Mosh';
console.log(name); // undefined

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-) 
// Are case-sensitive

let firstName = 'Mosh';
let lastName = 'Hamedani';

const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);

// Primitive/Value Types
let name1 = 'Mosh'; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let firstName1 = undefined;
let lastName1 = null;

//dynamic typing, type of variable can change
//static typing, type of variable cannot change

typeof name1

// Reference Types
// Object
let person = {
    name: 'Mosh',
    age: 30
};

console.log(person);
//Dot Notation
person.name = 'John';
console.log(person.name);

//Bracket Notation
person['name'] = 'Mary';
console.log(person.name);


//Arrays: list of items
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);
console.log(selectedColors.length);
console.log(selectedColors[0]);
console.log(typeof selectedColors);

//Functions: perform a task ,arguments(input), parameters
function greet(name, lastName)//parameters
{
    console.log('Hello ' + name + ' ' + lastName);
}
greet('John', 'Smith'); //arguments

//Calculating a value
function square(number)
{
    return number * number;
}
console.log(square(2));
