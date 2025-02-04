const express = require('express')
const path = require('path')
const app = express()
const port  = 3000

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.render('Home')
})

app.listen(port,()=>{
    console.log(`listening on the port ${port}`);
})

// https://amadeus.com/content/dam/amadeus/images/en/blog/2023/06/quantum-blog-image.jpeg
