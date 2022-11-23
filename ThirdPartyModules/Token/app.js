/* 
const jwt = require('jsonwebtoken')

let users={
    id:101,
    name:"rahul",
    email:"rahul@gmail.com",
    password:6548975
}

let payload={
    id:users.id,
    email:users.email
}

let secretKey='07012001DOB'

let token=jwt.sign(payload,secretKey,{expiresIn:30000})
console.log(token);

let user_Id=jwt.verify(token,secretKey)
console.log(user_Id); */


const jwt=require('jsonwebtoken')

let users={
    id:101,
    name:'rahul',
    email:'rahul@gmail.com',
    password:4466565598989
}
 
let payload={
    userId:users.id,
    userPassword:users.password
} 

let secretKey='07012001DOB'

let token=jwt.sign(payload,secretKey,{expiresIn:300000})
console.log(token)

let user_Id=jwt.verify(token,secretKey)
console.log(user_Id);