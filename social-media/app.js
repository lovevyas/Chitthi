const express=require('express');
const app=express();
const PORT=6000;
var mongoose = require('mongoose');
const MONGOURI = 'mongodb+srv://love1252be21:2gbh8mMOgCxK7MUP@cluster0.kzqa39v.mongodb.net/?retryWrites=true&w=majority';
require('./models/user');
require('./models/post');
require("dotenv").config();

app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/post'));
app.use(require('./routes/user'));

mongoose.connect(MONGOURI, {useNewUrlParser: true,useUnifiedTopology: true});
var db = mongoose.connection;
db.on('connected',()=>{
    console.log("Connected to db");
})
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path=require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT,()=>{
    console.log("Server is up at port",PORT)
})
