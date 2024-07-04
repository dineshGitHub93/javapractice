console.log("javascript learning is in progress...!")

// Variable declaration.
let c, d, e;

// Assign values to the variables;
c=5;

// compute values of variable
d=c;
e = c/d;
console.log("Value of C = "+e);

/*
JavaScript Literals:

JavaScript Numbers can be written with or without decimals.
Javascript Strings are text that can be written in single or double quotes.
*/

let a = 50;
let b =5.50;
let txt1 = "javascript";
let txt2 = "javascript2";

console.log(a);
console.log(b);
console.log(txt1);
console.log(txt2);

/* JavaScript Variables
Local variables: Declare a variable inside of a block or function.
Global variables: Declare a variable outside function or with a window object.
*/

//Declare a variable globally and initialize it
var name1 = "apple";

//funtion definition
function myfunction(){

    //Local variable declaration.
    let price_per_kg = 205;

    //display the value of global variable
    console.log(name1);

    //display the value of local variable
    console.log(price_per_kg);
}

myfunction();

/*JavaScript Operators.
we can perform operations on operands. Arithmetic operators ( +, -, *, / ) are 
used to compute the value, and Assignment operators ( =, +=, %= ) are used to 
assign the values to variables.
*/

//variable declaration
let x, y, sum;

// Assign values to the variables
x=11;
y=11;

// use arithmatic operator to add numbers.
sum = x+y;
console.log("sum of two numbers : "+sum);

/*JavaScript Expressions
Javascript Expression is the combination of values, operators, and variables. 
It is used to compute the values.
*/

//Variable declarations
let i,j, num, sum1; 

//Assign values to the variables
i =30;
j=35;

//Expression to devide a numbers
num = i/j;
sum1 = i+j;
console.log(num+" "+sum1);






