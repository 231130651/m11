const express = require("express");
const route = express.Router();

routes.get('/', (req,res) =>{
    console.log('ada data')
})

res.send("welcome")

module.exports = routes