const { application } = require('express');
const express = require('express');
const router = express.Router();
const { User, Rascal } = require('../../models');

router.get("/", (req, res) => {
    User.findAll().then(users => res.json(users)).catch(err => {
        console.log(err)
        res.json(err)
    })
})
router.get("/:id", (req, res) => {
    User.findAll().then(users => res.json(users)).catch(err => {
        console.log(err)
        res.json(err)
    })
})

module.exports = router