// dotenv is used for reading application configuration details
const dotenv = require('dotenv')
const path = require('path')

//file path
let file=path.join(__dirname, "config", "server", "config.env")
console.log(file)
 
// to read fileData
dotenv.config({path:file})

// process.env is a global variable
console.log(process.env.PORT) 
console.log(process.env.HOST_NAME) 
console.log(process.env.SECRET_KEY)