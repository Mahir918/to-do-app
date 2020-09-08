const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
var cors = require('cors');
const path = require('path');


const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors())

app.use('/api/post/',require('./router/index'))


app.get('/',(req,res)=>{
    res.json({
        message:'Welocome to our Application'
    })
})

const db = require('./config/key').mongoURI
const PORT = process.env.PORT || 4000

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT,()=>{
    mongoose.connect(db,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
})
