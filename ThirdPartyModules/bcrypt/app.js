/* let bcrypt = require('bcrypt')

let users={
    id:101,
    uName:"rahul",
    password:"vishnu"
}

let salt=bcrypt.genSaltSync(10)

let newPassword=bcrypt.hashSync('vishnu',salt)
console.log(newPassword)
console.log(users.password)

let flag=bcrypt.compareSync("vishnu",newPassword)
console.log(flag)
if(flag){
    console.log('login sucess')
}else{
    console.log('failure');
}  */

const bcrypt=require('bcrypt')

let users={
    id:101,
    name:"sonia",
    password:"president"
}

let salt=bcrypt.genSaltSync(10)

// hashSync means unreadble format
let newPassword=bcrypt.hashSync("president",salt)
console.log(newPassword)
console.log(users.password)
let flag=bcrypt.compareSync("president",newPassword)
console.log(flag);
if(flag){
    console.log("login sucessfull");
}else{
    console.log("login error");
}