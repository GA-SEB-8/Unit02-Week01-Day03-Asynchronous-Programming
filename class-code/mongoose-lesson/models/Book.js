
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

module.exports = Book
