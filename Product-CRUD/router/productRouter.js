import express, { response } from "express"
import productModel from "../model/product.js"

const router = express.Router()

//create product

router.post("/create", async (request, response) => {
  try {
    let new_Product = {
      name: request.body.name,
      price: request.body.price,
      qty: request.body.qty
    }
    let product = productModel(new_Product)
    console.log(product)
    let saveProduct = await product.save()
    response.status(200).json({
      message: "product created sucessfully",
      productDetails: product
    })
  }
  catch (err) {

  }
})

//get all products

router.get("/all", async (request, response) => {
  try {
    let getProducts = await productModel.find()
    response.status(200).json({
      allProducts: getProducts
    })
  }
  catch (err) {
    response.status(404).json({
      message: err.msg
    })

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
      return response.status(400).json({
        message: "no products found"
      })
    }
    let productOne = await productModel.findByIdAndUpdate(product_id, { $set: update_product }, { new: true })
    response.status(202).json({
      result: "updated sucessfully",
      productDetails: productOne
    })
  }
  catch (err) {

  }
})
// delete product

router.delete("/:id",async(request,response)=>{
  try{
 let product_id=request.params.id
 console.log(product_id);
 let product=productModel.findById(product_id)
 if(!product){
  response.status(404).json({
    message:"no products found"
  })
 }
 let delProduct=await productModel.findByIdAndDelete(product_id)
 response.status(202).json({
  message:"deleted sucessfully",
  products:delProduct

 })
  }
  catch(err){

  }
})



export default router