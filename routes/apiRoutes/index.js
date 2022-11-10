const router = require('express').Router();
const {createNewNote, updateDb} = require("../../lib/notes");
const {notes} = require("../../db/db.json");

// show all notes in json data 
router.get("/notes", (req, res) => {
    let saved = notes;
    res.json(saved);
  });

  router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
  });  

  router.delete("/notes/:id" , (req, res) => {
    const params = req.params.id
    updateDb(params, notes);
    res.redirect('');
  });

  module.exports = router;