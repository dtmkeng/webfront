'use strict'
const express = require('express')
const app = express()
const axios = require('axios');
const host = 'backend'
const path = require('path')
app.get('/',(req,res)=>{
    axios.get(`http://${host}:9001`)
    .then(function (response) {
        // handle success
        // console.log();
        // data = 
        res.render('index',response.data)
       
    })
   
   
})
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.listen(9000,()=>{
    console.log('server running in port 9000')
})