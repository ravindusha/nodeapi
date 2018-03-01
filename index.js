const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//express app
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const dbConfig = require('./config/database.config.js');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function(err){
  console.log(err);
  process.exit();
});

mongoose.connection.once('open', function(){
  console.log("Connected to database..");
});

app.get('/', (req,res)=>{
  res.json({
    "message": "Welcome to simple Node.js API"
  });
});

app.get('/*', function (req,res) {
  res.status(400).json({
    'message':'Error! Invalid Request'});
});

app.listen(3000, function(){
  console.log("Server started on port 3000...");
})
