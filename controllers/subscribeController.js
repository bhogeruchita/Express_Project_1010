const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const Tour = require('./../models/tourModel');

app.use(bodyParser.urlencoded({ extended: true }));

exports.getSubscribe = (req,res) =>{
        res.sendFile("c:/Users/ruchita.bhoge/express_project/dev_data/templates/contact_us.html");
    }

exports.createSubscribe = async (req,res) =>{
    try{
        const newTour = await Tour.create(req.body);
        res.sendFile("c:/Users/ruchita.bhoge/express_project/dev_data/templates/home.html")
    
    } catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
  
    }