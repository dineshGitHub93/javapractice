//declare a variable using let in local
{
    let num =15;
    console.log(num);
}

//calling outside function
//console.log(num);

//Declare a variable globally
let num1 =10;
console.log(num1)
function fun(){
    console.log(num1)
}
fun();

// redeclaring a variable

let x = 20;

{
    let x = 28;
    console.log(x);
}
console.log(x);

// Declaring const variable
const a = 5;
/* a =13;
a= a+5; */
console.log(a);

// const variable block scope

const y = 90;

{
    const y =55;
    console.log(y);
}
{
    const y = 66;
    console.log(y);
}
{
    const y = 77;
    console.log(y);
}
console.log(y)

//Const array
const arr1 = ["We","love","you","kunja"];
console.log(arr1.toString());

arr1[2]="you so much";
console.log(arr1.toString());

//Const object

const employee = {
    emp_name : "Dinesh",
    emp_id : "30482",
    emp_salary : "100000",
    emp_designation : "Java Developer"
}

console.log(employee);

employee.emp_name = "Gayathri";
employee.emp_id = "30483";
employee.emp_salary = "50000";
employee.emp_designation ="Software Tester";

console.log(employee);
