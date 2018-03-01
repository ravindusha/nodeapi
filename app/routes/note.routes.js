module.exports = function (app) {
    const notes = require('../controllers/note.controller.js');

    //create a note
    app.post('/notes', notes.create);

    //find all notes
    app.get('/notes', notes.findAll);

    //find a note by note ID
    app.get('/notes/:noteId', notes.findOne);

    //update a note by ID
    app.put('/notes/:noteId', notes.update);

    //delete a note by ID
    app.delete('/notes/:noteId', notes.delete);
}
