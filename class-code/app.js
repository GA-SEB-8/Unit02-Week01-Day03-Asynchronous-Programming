const axios = require("axios")
// if we want to make requests to outside applications we need to use this package:
// axios

const allStudents = axios.get("https://omar-ga-class.onrender.com/students")

// console.log(allStudents)

// 1. add async before the function
// 2. put await infront of any asynchrnous code that is returning a promise
async function getStudents(){
    const allStudents = await axios.get("https://omar-ga-class.onrender.com/students")

    console.log(allStudents.data)

}

// getStudents()


async function deleteStudent(){
    try{
        await axios.delete("https://omar-ga-class.onrender.com/students/33")
    }
    catch(error){
        console.log("PROBLEM ERROR SOMETHING HAPPEN")
    }

    
}

// deleteStudent()



async function createStudent(){
    const createdStudent = await axios.post("https://omar-ga-class.onrender.com/students",{studentName:"Mohammad"})
}

// createStudent()



try{
console.lg("Hello from try")
}
catch(error){
    console.log("ERROR", error)
}


console.log("amna" , {name:"Something"})