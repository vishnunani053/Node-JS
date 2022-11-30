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

import express, { Router } from "express"

const router = express.Router()
router.post('/create', async (request, response) => {
    try {
        let product = {
            name: request.body.name,
            price: request.price.name,
            qty: request.body.qty
        }
        let x = await
            console.log(product)
    } catch (err) {

    }
})
export default router