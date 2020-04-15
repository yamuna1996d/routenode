var express = require('express');
var {regmodel}= require('../models/empmodel')
const routers=express.Router();

routers.get('/',(req,res)=>{
    res.send('hai');
});

routers.post('/register',async(req,res)=>{
    try {
        var data= new regmodel(req.body);
        var result= await data.save();
        res.json(result);
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
routers.post('/login',async(req,res)=>{
    try {
        var searchempCode=req.body.mycode;
        var searchpassword= req.body.mypass;
        regmodel.find({
            $and:[
                {
                    "empCode":searchempCode
                },
                {
                    "empPassword":searchpassword
                }
            ]
        },(error,data)=>{
            if(error){
                throw error;
            }
            if (data.length>0) {
                res.json({"status":"Success"});
            }
            else{
                res.json({"status":"Failed"});
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

module.exports = routers