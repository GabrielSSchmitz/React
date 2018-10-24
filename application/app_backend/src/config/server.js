const PORT = 3003
const bodyParse = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParse.urlencoded({extended: true}))
server.use(bodyParse.json())

server.listen(PORT, function() {
    console.log('BACKEND está rodando na porta ' + PORT + '.' )
})