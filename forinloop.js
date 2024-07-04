const course1 = {

    front_end : "react",
    backend : "java"

}
const course2 = {

    front_end : "react",
    backend : "python"

}
const course3 = {

    front_end : "react",
    backend : "javascript"

}

const student1 = Object.create(course3);

student1.ID = "30482";
student1.Name = "Dinesh";
student1.courseEnrolled = function() {
    console.log(course3);
}

for(let prop in student1){
    console.log(prop+" -> "+student1[prop]);
}