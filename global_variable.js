//declare a variable globally.
var petName = "johny";
myfunction();
anotherfun();

function myfunction(){

    fruite = "apple";

    console.log( typeof petName+"-"+"my petname is :"+petName);

}

function anotherfun(){
    var petName = "mothy";
    console.log("petName in local var : "+petName)
}

console.log(typeof fruite+"-"+"my fav petName & fruite name : "+fruite+" "+petName);
console.log(petName);

let myCarName;

fun1();
fun2();

function fun1(){
    let myCarName ="Altroz";
    console.log(myCarName);
}
function fun2(){
    let myCarName = "Tigor";
    console.log(myCarName);
}
console.log(myCarName);


