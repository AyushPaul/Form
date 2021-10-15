const express = require('express')
const path = require('path')
const {Center , Season , Course} = require('./db/models')
const app = express()

app.set('view engine' , 'hbs')
app.set('views' , path.resolve(__dirname,'../views'))

app.get('/batchcode' , (req,res)=>{
    res.render('batchcode')
})

module.exports = {
    app
}