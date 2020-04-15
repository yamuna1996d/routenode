var express = require('express');
var parser= require('body-parser');
var mongoose = require('mongoose');
var app = express();
var emprouter = require('./routes/empoute');

app.use(parser.urlencoded({extended:false}));
app.use('/emp',emprouter)

mongoose.connect("mongodb+srv://dbuser:ava1996@cluster0-xpwmn.mongodb.net/test?retryWrites=true&w=majority");


app.listen(process.env.PORT || 3000,()=>{
    console.log("Server Started");
});