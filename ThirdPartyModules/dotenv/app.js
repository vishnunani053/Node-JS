/* //dot env is used for reading appplication configuration deatails

const dotenv=require('dotenv')
const path=require('path')

let filePath=path.join(__dirname,'config','server','config.env')
console.log(filePath);

// to read file data
dotenv.config({path:filePath})

// process.env is a global variable
console.log(process.env.PORT)
console.log(process.env.HOST_NAME);
console.log(process.env.SECRET_KEY) */

const dotenv =require('dotenv')
const path=require('path')

let file=path.join('config','server','config.env')
console.log(file)

dotenv.config({path:file})

console.log(process.env.PORT);
console.log(process.env.HOST_NAME)
console.log(process.env.SECRET_KEY)