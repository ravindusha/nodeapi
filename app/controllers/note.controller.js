const Note = require('../models/note.model.js');

exports.create = function(req,res){
  if (!req.body.content) {
    return res.status(400).json({
      'message': 'Note cannot be empty!'
    });
  }

  var note = new Note({
    title: req.body.title || 'Untitled',
    content: req.body.content
  });

  note.save(function (err, data) {
    if(err){
      console.log(err);
      res.status(500).json({
        'message': 'Error occured while creating Note'
      });
    }else {
      res.send(data);
    }
  })

};

exports.findAll = function(req,res){

};

exports.findOne = function(req,res){

};

exports.update = function(req,res){

};

exports.delete = function(req,res){

};
