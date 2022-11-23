const path=require('path')
const fs = require('fs')

let filePath =path.join(__dirname, "vishnu", "data", "data.json")
console.log(filePath)

fs.readFile(path.join(__dirname, "vishnu", "data", "data.json"), "utf-8", (err, data)=>{
    if(err) throw err
    JSON.parse(data)
    console.log(data)
})


