const myStudent = {
    studentName:"Fahad",
    course:"Software Engineering",
    languages:{
        lan1:"english",
        lan2:"arabic"
    }
}

console.log(myStudent)
// destructuring
const {studentName,course} = myStudent
console.log(studentName)
console.log(course)
const {lan1,lan2} = myStudent.languages