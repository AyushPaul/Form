const express = require('express')
const path = require('path')
const {Center , Season , Course} = require('./db/models')
const app = express()

app.set('view engine' , 'hbs')
app.set('views' , path.resolve(__dirname,'../views'))

app.get('/batchcode' , async (req,res)=>{

    try {
        const centers = await Center.findAll()
        const courses = await Course.findAll()
        const seasons = await Season.findAll()
        res.render('batchcode' , {
            centers, courses,seasons
        })
    } catch (e) {
        console.error(e)
    }


    res.render('batchcode')
})



module.exports = {
    app
}