const express = require('express');
const router = express.Router();
const { User, Rascal } = require('../../models');


router.get("/", (req, res) => {
    Rascal.findAll().then(rascals => {
        res.json(rascals)
    }).catch(err => {
        console.log(err)
        res.json(err)
    })
})
router.get("/:id", (req, res) => {
    Rascal.findByPk(req.params.id).then(rascal => {
        res.json(rascal)
    }).catch(err => {
        console.log(err)
        res.json(err)
    })
})
router.post("/new",(req,res)=>{
    Rascal.create(req.body).then(newRascal=>{
        res.json(newRascal)
    }).catch(err=>{
        console.log(err)
        res.json(err)
    })
})
module.exports = router