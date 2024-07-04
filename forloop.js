//javascript program to illustrate for loop
let x ;

//for loop begins when x=2 and runs til x <4
for(x=2 ; x<=4; x++){
    console.log("value of x :"+x);
}

// initialize the counter variable externally rather than in statement
let i =2;
console.log("initialize the counter variable externally");
for(;i<=5;i++){
    console.log("value of i :"+i);
}

console.log("Updating Counter Variable");

const sub = ["Tamil","English","Maths","Science","S.Science"];
let j=0;
let len = sub.length;
let grp="";
for(;j<len;){
    grp +=sub[j];
    j++;
}
console.log(grp);