/* const http = require('http')
const dotenv = require('dotenv')
const path = require('path')
const url = require('url')
const fs = require('fs')

//let server=http.createServer().listen

let filePath = path.join(__dirname, 'config', 'config.env')
console.log(filePath);
dotenv.config({ path: filePath })

let PORT = process.env.PORT

let server = http.createServer((request, response) => {
    let url = request.url;
    if (url == '/') {
        fs.readFile('./views/index.html', 'utf-8', (err, data) => {
            if (err) throw err
            response.end(data);
        })

    }
    if (url == '/about') {
        fs.readFile('./views/about.html', 'utf-8', (err, data) => {
            if (err) throw err
            response.end(data)
        })

    }

    if (url == '/services') {
        fs.readFile('./views/services.html', 'utf-8', (err, data) => {
            if (err) throw err
            response.end(data);
        })

    }

    if (url == '/contact') {
        fs.readFile('./views/contact.html', 'utf-8', (err, data) => {
            if (err) throw err
            response.end(data);
        })

    }
})

server.listen(PORT, () => {
    console.log(`server is running on.......http://localhost:${PORT}`)
})
 */


const http = require('http')
const path = require('path')
const dotenv = require('dotenv')
const fs = require('fs')
const url = require('url')

let filePath = path.join(__dirname, 'config', 'config.env')
dotenv.config({ path: filePath })

let PORT = process.env.PORT

//let server=http.createServer().listen()

let server = http.createServer((request, response) => {
    let url = request.url
    if (url == '/') {
        fs.readFile('./views/index.html', 'utf-8', (err, data) => {
            if (err) throw err
            response.end(data)
        })
    }
    if (url == '/about') {
        fs.readFile('./views/about.html', 'utf-8', (err, data) => {
            if (err) throw err
            response.end(data)
        })
    }
    if (url == '/contact') {
        fs.readFile('./views/contact.html', 'utf-8', (err, data) => {
            if (err) throw err
            response.end(data)
        })

    }
    if (url == '/services') {
        fs.readFile('./views/services.html', 'utf-8', (err, data) => {
            if (err) throw err
            response.end(data)
        })

    }
})

server.listen(PORT, () => {
    console.log(`server is running...http://localhost:${PORT}`);
})