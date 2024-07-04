let a=0;
for(a=0;a<6;a++){
    console.log(a);
}

console.log("While loop");
a=0;
while(a<5){
    console.log(a);
    a++;
}
console.log("Do...! while loop")
a=0;
do{
    console.log(a);
    a++;
}while(a<4);

console.log("JavaScript for-in Loop");
const obj = {a:1,b:3,c:5};
for(let prop in obj){
    console.log(prop+" :"+obj[prop]);
}

console.log("JavaScript for-of Loop");
const arr = [2,4,6,8,9];
for(let num of arr){
    console.log(num);
}

console.log("JavaScript forEach loop");
const arr1 = [3,7,9,11,13,15];
arr1.forEach(val=>console.log(val));

console.log("JavaScript map Loop");
const arr3 = [1,3,5,7,9,11];
const modifiedArr = arr3.map(val => val *3);
console.log(modifiedArr);
