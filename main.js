const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const model = require('./models/database.js')
mongoose.connect('mongodb://127.0.0.1:27017/Feedback')
const app = express()
const port  = 3000

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.render('Home')
})
app.post('/',async (req,res)=>{
    let {text} = req.body
    if(text!=""){
        let Feedback = await model.create({
            text
        })
    }
    res.redirect('/')
})

app.listen(port,()=>{
    console.log(`listening on the port ${port}`);
})