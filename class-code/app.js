const axios = require("axios")
// if we want to make requests to outside applications we need to use this package:
// axios

const allStudents = axios.get("https://omar-ga-class.onrender.com/students")

console.log(allStudents)