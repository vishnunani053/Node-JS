/* const path = require('path')
const fs = require('fs')

let filePath = path.join(__dirname,'NewPath','data','data.json')
console.log(filePath);

  fs.readFile(path.join(__dirname,'NewPath','data','data.json'),'utf-8',(err,data)=>{
if(err) throw err
JSON.parse(data)
console.log(data);
  }) */

   const fs=require('fs')
   const path=require('path')

    let filePath=path.join('NewPath','data','data.json')
    console.log(filePath)

    fs.readFile(path.join('NewPath','data','data.json'),'utf-8',(err,data)=>{
        if(err) throw err
        //console.log(data) 

        // parse is used to convert string to object
        console.log(JSON.parse(data))
    })