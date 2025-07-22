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