
//Semicolons separate JavaScript statements.
//A semicolon marks the end of a statement in JavaScript. 

let a,b,c;
a =2;
b =3;
c = a+b;

console.log("The value of a is "+a+".");
console.log("The value of b is "+b+".");
console.log("The value of c = a+b is "+c+".");

a=15; b=15; c=a+b;
console.log("The value of c = a+b is "+c+".");

//JavaScript statements can be grouped together inside curly brackets. Such groups are known as code blocks
function sumoftwovalue(x, y){
    console.log("x = "+x+".");
    console.log("y = "+y+".");
    console.log("Sum value of x & y is "+(x+y)+".");
}

sumoftwovalue(20, 35);

//JavaScript ignores multiple white spaces.
console.log(10*20);
console.log(11   *  10);