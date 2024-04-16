const express = require('express')
const app = express()
//  connect to database
mongoose.connect().then().catch()


// post prodct

app.post('/create',(req,res)=>{
    const newProduct = new Product({
        title: req.body.data.title,
        description: req.body.data.description,
        price: req.body.data.price,
        discountPercentage: req.body.data.discountPercentage,
        rating: req.body.data.rating,
        stock: req.body.data.stock,
        brand: req.body.data.brand,
        category: req.body.data.category,
        thumbnail: req.body.data.thumbnail,
        images: req.body.data.images,
    })
})

app.listen(5000,()=>{
    console.log('listening')
})