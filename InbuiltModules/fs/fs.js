const fs = require('fs')


// Synchronous Way
let file=fs.readFileSync("one.txt", "utf-8")
console.log(file)

fs.writeFileSync("two.txt", "this is wriyting data","utf-8")

fs.writeFileSync("three.txt", file, "utf-8")

// Asynchronous Way

let files=fs.readFile("two.txt", "utf-8", (err, data)=>{
    if(err) throw err
    fs.writeFile("four.html", "<h1>learning nodejs</h1>", "utf-8", (err)=>{
        if(err) throw err
    })
})


