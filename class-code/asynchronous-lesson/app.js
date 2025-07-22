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




 /* 

READ:

.find(): fetches all the documents

.find({rating:10}): fetches all the documents that have a 10 rating

.findOne({title:"Barbie"}): fetches 1 document based on the query given in the argument. Will return barbie movie document

.findById('65f12531dc4084e350bd5f4f'): fetches 1 document based on the id given in the arguement



CREATE:

.create({title:"New Movie",director:"John Smith"}): will create a new document with the field values given in the arguement. Argument is an object

.insertMany([{title:"Star Wars",director:"George Lucas"},{title:"Star Wars 2",director:"George Lucas"}]): will create many new documents with the field values given in the arguement. Argument is an array of objects


UPDATE:

.updateOne({title:"Star Wars"}, {rating:9}): will find the movie with the query from the first arugment and change the rating to 9. 

.updateMany({director:"George Lucas"}, {rating:9}): will find all the movies with the director being george lucas and change the rating to 9. 

.findByIdAndUpdate('65f12531dc4084e350bd5f4f',{title:"Changed Title"}): Finds a document by its _id and updates it.



DELETE:

.deleteOne(): deletes 1 document based on the query in the arument

.deleteMany(): deletes all the documents that match the query provided in the arguemnt

.findByIdAndDelete('65f12531dc4084e350bd5f4f')
*/



// bookModel.updateMany({releaseYear:{$gt:2020}},{name:"CHANGED WITH UPDATE MANY"})



// Adding many books
/* bookModel.insertMany([
    {
        "name":"new book 1",
        "author":"Mohammad",
        "releaseYear":2024
    },
    {
        "name":"new book2",
        "author":"Mohammad",
        "releaseYear":2024
     },
     {
        "name":"new book 3",
        "author":"Abdullah",
        "releaseYear":2024
     }
])
 */
