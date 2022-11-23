const fs=require ('fs')
 
//synchronus way

let file=fs.readFileSync('one.txt',"utf-8")
console.log(file)
 fs.writeFileSync('two.txt','writing something in this file','utf-8')
 fs.writeFileSync('three.txt',file,'utf-8')
 
 // asynchronus way

 let newFile=fs.readFile('one.txt','utf-8',(err,data)=>{
if(err) throw err 
 })

 let writeFile=fs.writeFile('four.html','<h1>helllo rahul gandhi<h1>','utf-8',(err,data)=>{
    if(err) throw err
 })