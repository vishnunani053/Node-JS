const bcrypt = require('bcrypt')

let users = {
    id:102,
    name:"rahul",
    password:"hhjgj"
}

let salt = bcrypt.genSaltSync(10)

let newPassword = bcrypt.hashSync(users.password, salt)

console.log(users.password);
console.log(newPassword);

let flag = bcrypt.compareSync("hhjgj", newPassword)
console.log(flag)

if(flag){
    console.log("login successfully")
}
else{
    console.log("login failed")
}
