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
    title: String,
    author: String,
    genres: [String], //array of strings
    price: Number,
    releaseYear: Number,
    isBestSeller: Boolean
})

// model
const Book = mongoose.model("Book",bookSchema)


async function createBook(){

    // we use the model for our CRUD
    // .create makes a new book for me
    const newBook = {
        title: "Harry Potter 2",
        author: "JK Rowling",
        genres: ["adventure","Sci-Fi"],
        price: 10,
        releaseYear: 2001,
        isBestSeller:true
    }

    const createdBook = await Book.create(newBook)
    console.log(createdBook)
}

// createBook()


async function getAllBooks(){
// find(): returns all the books in the collections
    const allBooks = await Book.find({releaseYear: 1999})
    console.log(allBooks)
}

getAllBooks()