import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import chalk from "chalk"
import morgan from "morgan"
import cors from "cors"
import productRouter from "./product/productRouter.js"

const app = express()
dotenv.config({ path: './config/config.env' })
app.use(cors())
app.use(morgan('tiny'))

//how to read form data

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//create route request

app.get('/', (request, response) => {
    response.send('<h1>welcome to node js</h1>')
})

//config user-route /product routes
app.use("/product", productRouter)

const port = process.env.port
const host_Name = process.env.HOST_NAME

// connecting to mongo DB
const mongUrl = process.env.MONGO_DB_LOCAL_URL
mongoose.connect(mongUrl)
    .then((response) => {
        console.log("mongo db connection sucessfull");
    })
    .catch((err) => {
        console.log(err);
        process.exit(1)
    })

app.listen(port,() => {
    console.log(`server is running on...http://${host_Name}:${port}`);
})
