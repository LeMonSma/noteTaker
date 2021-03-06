const path = require('path')
const fs = require('fs')
const router = require('express').Router()
const db = require('../db/db.json')
const noteArray = []

router.get('/notes', (req, res) => {
    //Make query to database

    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.json(JSON.parse(data));
    })





});



router.post('/notes', ({ body }, res) => {
    const note = body
    note.id = noteArray.length
    noteArray.push(note)
    console.log(noteArray)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(noteArray, null, 2))
    res.json(noteArray)
})

router.delete('/notes/:id', (req, res) => {

    const { id } = req.params;

    for (let i = 0; i < db.length; i++) {
        if (id === db[i].id) {
            db.splice(i, 1)
        } else {
            res.status(404).send();
        }
    }

    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(noteArray, null, 2))

});

module.exports = router