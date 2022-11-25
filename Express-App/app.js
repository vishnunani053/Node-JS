/* const express = require('express')
const app = express();
const dotenv = require('dotenv')
const morgan = require('morgan')

dotenv.config({path:"./config.env"})

let port = process.env.PORT
console.log(port);

app.use(morgan('tiny'))

app.get("/", (req, res)=>{
    res.send("Express server is running")
})
app.get("/user", (req, res)=>{
    res.send("Express get server is running")
})
app.post("/user/login", (req, res)=>{
    res.send("Express post server is running")
})
app.put("/user/update", (req, res)=>{
    res.send("Express put server is running")
})
app.delete("/user/delete", (req, res)=>{
    res.send("Express delete server is running")
})

app.listen(port, (err)=>{
    if(err) throw err
    console.log(`Server is running on...http://localhost:${port}`)
})
 */

/* 
const morgan=require('morgan')
const dotenv=require('dotenv')
const express =require('express')

const app=express()

dotenv.config({path:"./config.env"})

let PORT=process.env.PORT
console.log(PORT);

app.use(morgan('tiny'))
app.get('/',(request,response)=>{
response.send("express app")
})
app.get('/user',(request,response)=>{
response.send("express app working")
})

app.listen(PORT,(err)=>{
if(err) throw err
console.log(`server is running on...http://localhost:${PORT}`)
}) 
 */

const morgan = require('morgan')
const dotenv = require('dotenv')
const express = require('express')
const chalk=require('chalk')


const app = express()

dotenv.config({ path: './config.env' })
let PORT = process.env.PORT

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send("my express app is working")
})

app.get('/user', (req, res) => {
    res.send("my express app is working sucessfully")
})
app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`${chalk.yellowBright(`server is running on...http://localhost:${PORT}`)}`)
})