const mongoose = require("mongoose")

async function connectToDB(){

    try{
        await mongoose.connect("mongodb+srv://omar1:1234@cluster0.g3jfckx.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0")

        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error: Issue connecting to Database")
    }

    
}

connectToDB()



// creating the schema and model

const bookSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        unique:true
    },
    author: String,
    genres: [String], //array of strings
    price: Number,
    releaseYear: Number,
    isBestSeller: {
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        enum:[1,2,3,4,5]
    }
})

// model
const Book = mongoose.model("Book",bookSchema)


async function createBook(){

    // we use the model for our CRUD
    // .create makes a new book for me
    const newBook = {
        title: "Harry Potter 2",
        rating:6

    }

    const createdBook = await Book.create(newBook)
    console.log(createdBook)
}

// createBook()


async function getAllBooks(){
// find(): returns all the books in the collections
// Book.find({releaseYear: 1999}): returns only the book that matches the condition
// Book.findById("687f8936814cbbea199c5fdc"): gets me the books with this id


    // const allBooks = await Book.find({releaseYear: 1999})
    const foundBook = await Book.findById("687f8936814cbbea199c5fdc")
    console.log(foundBook)
}

// getAllBooks()





async function updateBook(){
    // 2 arguments
    // 1. the id of the book we want to update
    // 2. the updated value
    const updatedBook = await Book.findByIdAndUpdate("687f8936814cbbea199c5fdc",{
  title: 'Israa Book'
},{new:true})

    console.log(updatedBook)
}


updateBook()







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
