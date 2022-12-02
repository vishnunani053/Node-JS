/* import express, { Router } from "express"
const router = express.Router()

router.post('/create', async (request, response) => {
    try {
        let product = {
            name: request.body.name,
            price: request.body.price,
            qty: request.body.qty
        }
        let x = await
            console.log(product);
    } catch (error) {

    }
})
export default router  */

/* import express, { Router } from "express"
const router = express.Router()
router.post('/create', async (request, response) => {
    try {
        let product = {
            name: request.body.name,
            price: request.body.price,
            qty: request.body.qty
        }
        let x = await
            console.log(product);
    } catch (err) {

    }
}
)
export default router  */




import express, { request } from "express"
import productModel from "../model/product.js"

const router = express.Router()
/*
    URL:localhost:8000/product/create
    Method:POST
    Fields:name, price, qty
*/
//get products
router.get("/all", async (request, response) => {
    try {
        let products = await productModel.find()
        response.status(200).json(products)
    }
    catch (err) {
        response.status(400).json({
            msg: err.message
        })
    }
})

// create  products
router.post("/create", async (request, response) => {
    try {
        //read data from insomania/postman
        let new_Product = {
            name: request.body.name,
            price: request.body.price,
            qty: request.body.qty
        }
        let product = productModel(new_Product)
        console.log(product);
        let saveProduct = await product.save()
        response.status(200).json({
            result: "data created sucessssfully",
            productDetails: product
        })
    } catch (error) {

    }
})

//update product
router.put("/:id", async (request, response) => {
    let product_id = request.params.id
    console.log(product_id)
    try {
        let update_product = {
            name: request.body.name,
            price: request.body.price,
            qty: request.body.qty
        }
        let product = productModel.findById(product_id)
        if (!product) {
            return response.status(401).json({
                msg: "no product found"
            })
        }
        let productOne = await productModel.findByIdAndUpdate(product_id, { $set: update_product }, { new: true })
        response.status(200).json({
            result: "product updated",
            productDetails: productOne
        })
    }
    catch (err) {

    }

})

//delete product

router.delete("/:id", async (request, response) => {

    try {
        let product_id = request.params.id
        console.log(product_id)
        let product=productModel.findById(product_id)
        if(!product){
           return response.status(404).json({
            msg:"no products"
           })
        }
        const delProduct=await productModel.findByIdAndDelete(product_id)
         response.status(202).json({
            msg:"deleted sucessfully",
            productDetails:delProduct
         })
    }
    catch (err) {

    }
})



export default router