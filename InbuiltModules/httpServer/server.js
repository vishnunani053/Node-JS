/* const http=require('http')
const dotenv=require('dotenv')
const path=require('path')

//http.createServer().listen()

let filePath=path.join(__dirname,'config','config.env')
console.log(filePath);

dotenv.config({path:filePath})

let PORT=process.env.PORT
let HOST_NAME=process.env.HOST_NAME
console.log(PORT)
console.log(HOST_NAME)

let server=http.createServer((request,response)=>{ 
    response.writeHead(200,{'content-type':'text/plain'})
    response.end('hello good morning rahul')
})
server.listen(PORT,()=>{
    console.log(`server is running...${PORT}`);

}) */

/* 
const http=require('http')
const path=require('path')
const dotenv=require('dotenv');
const { type } = require('os');

//let server=http.createServer().listen()

let filePath=path.join(__dirname,'config','config.env')
console.log(filePath);

dotenv.config({path:filePath})

let PORT=process.env.PORT
console.log(PORT);

let server=http.createServer((request,response)=>{
response.writeHead(200,{'content-type':'text/plain'})
response.end('hello good morning')
})
server.listen(PORT,()=>{
console.log(`server is running...${PORT}`)
})
 */

const http=require('http')
const path=require('path')
const dotenv=require('dotenv');
const { env } = require('process');

//let server=http.createServer().listen()

let filePath=path.join(__dirname,'config','config.env')
console.log(filePath);
dotenv.config({path:filePath})

let PORT=process.env.PORT

let server=http.createServer((request,response)=>{
response.writeHead(200,{'content-type':'text/html'})
response.end('<h1>heloo good mornig rahul gi</h1>')
})

server.listen(PORT,()=>{
    console.log(`server is running..... ${PORT}`);
})