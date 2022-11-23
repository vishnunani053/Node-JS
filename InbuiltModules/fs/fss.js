const fs=require('fs')

let data=fs.readFile('data.json',"utf-8",(err,data)=>{
    if(err) throw err
   // console.log(JSON.stringify(data) )
    console.log(JSON.parse(data) )
})