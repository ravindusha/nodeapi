const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//express app
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
  res.json({
    "message": "Welcome to simple Node.js API"
  });
});

app.listen(3000, function(){
  console.log("Server started on port 3000...");
})
