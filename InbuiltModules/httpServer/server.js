const http = require('http')
const dotenv = require('dotenv')
const path= require('path')

// http.createServer().listen()

let file=path.join(__dirname, "config", "config.env")

dotenv.config({path:file})

let PORT = process.env.PORT
let HOST_NAME=process.env.HOST_NAME
console.log(PORT)

let server = http.createServer((request, response)=>{
    // response.writeHead(200, {"content-type":"text/plain"})

    response.writeHead(200, {"content-type":"text/html"})
    response.end(`<h1>hi buddies</h1>`)
})
server.listen(PORT, ()=>{
    console.log(`server is running on...${PORT}`)
})