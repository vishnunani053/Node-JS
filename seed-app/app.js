/* import express from "express"
 import chalk from "chalk"
import morgan from "morgan"

const app = express()
app.use(morgan('tiny'))
app.get('/',(request,response)=>{
    response.send("node js using es-6 & 'type':'module' in package.json")
})
app.listen(8080,(err)=>{
    if(err) throw err
    //console.log(`server is running..`);
    console.log(`${chalk.bgGreen(`server is running...http://localhost:${8080}`)}`);
}) */

/* import morgan from "morgan";
import chalk from "chalk";
import express from "express"

const app=express()
app.use(morgan('tiny'))
app.get('/',(request,response)=>{
response.send('using ES-6 features and modify type:module in package.json')
})
app.listen(8899,(err)=>{
if(err) throw err
console.log(`${chalk.bgBlueBright(`server is runnig...http://localhost:${8899}`)}`)
}) */


import morgan from "morgan";
import chalk from "chalk";
import express from "express"

const app=express()
app.use(morgan('tiny'))
app.get('/',(request,response)=>{
    response.send('es6 features')
})
app.listen(9966,(err)=>{
    if(err) throw err
    console.log(`${chalk.bgMagenta(`server is running...http://localhost${9966}`)}`);
})