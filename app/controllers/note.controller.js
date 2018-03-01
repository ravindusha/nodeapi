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

exports.findAll = function (req,res){
  Note.find(function (err, notes){
    if (err) {
      console.log(err);
      return res.status(500).json({
        'message': 'Error occured while retrieving Notes'
      })
    }else {
      res.send(notes);
    }
  });
};

exports.findOne = function(req,res){
  Note.findById(req.params.noteId, function (err, note) {
    if (err) {
      console.log(err);

      if (err.kind === 'ObjectId') {
        return res.status(404).json({
          'message': 'Invalid Note ID '+req.params.noteId
        });
      }
      return res.status(500).json({
        'message': 'Error retrieving note'
      })
    }

    if (!note) {
      return res.status(404).json({
        'message': 'Invalid Note ID '+req.params.noteId
      });
    }
    res.send(note);
  });
};

exports.update = function(req,res){
  Note.findById(req.params.noteId, function (err, note) {
    if (err) {
      console.log(err);

      if (err.kind === 'ObjectId') {
        return res.status(404).json({
          'message': 'Invalid Note ID '+req.params.noteId
        });
      }
      return res.status(500).json({
        'message': 'Error retrieving note'
      })
    }

    if (!note) {
      return res.status(404).json({
        'message': 'Invalid Note ID '+req.params.noteId
      });
    }

    note.title = req.body.title;
    note.content = req.body.content;

    note.save(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).json({
          'message': 'Could not update Note'
        });
      }else {
        res.send(data);
      }
    });

  });
};

exports.delete = function(req,res){

};
