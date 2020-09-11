// code away!
require('dotenv').config();
// const port = process.env.port || 5000;

const server = require('./server')
const express = require('express') 
// server.use(express.json())
const PORT = process.env.PORT || 8000;
console.log(process.env.PORT,process.env.MOTD)
server.listen(PORT, () => {
    console.log(`listenin on port`)
}) 