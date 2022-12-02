import mongoose from "mongoose"
let productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    qty: {
        type: Number,
        require: true
    }
})
let productModel = mongoose.model("product", productSchema)
export default productModel