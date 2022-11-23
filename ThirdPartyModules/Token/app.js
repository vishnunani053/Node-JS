// npm i json webtoken
// creating token ( to create token we need unique value ie user id)
const jwt = require('jsonwebtoken')

//user data
let user ={
    id:102,
    userName:"vishnuNani",
    email:"nani@gmail.com",
    password:"565445564"
}

// payload means data
let payload = {
    id:user.id,
    userName:user.userName,
    email:user.email
}

let secretKey="20010107DOB"

// creating token
let token = jwt.sign(payload, secretKey, {expiresIn:60000})
console.log(token)

 // once we create token ..based on token only we can verify user details
 //verify user details
let user_Id = jwt.verify(token, secretKey)
console.log(user_Id)