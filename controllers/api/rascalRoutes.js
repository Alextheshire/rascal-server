const express = require('express');
const router = express.Router();
const { User, Rascal } = require('../../models');
const tokenAuth = require("../../middleware/tokenAuth")


router.get("/", (req, res) => {
    Rascal.findAll().then(rascals => {
        res.json(rascals)
    }).catch(err => {
        console.log(err)
        res.json(err)
    })
})
router.get("/lookup/:id", (req, res) => {
    Rascal.findByPk(req.params.id).then(rascal => {
        res.json(rascal)
    }).catch(err => {
        console.log(err)
        res.json(err)
    })
})
router.post("/new",tokenAuth,(req,res)=>{
    Rascal.create({...req.body,UserId:req.user.id}).then(newRascal=>{
        res.json(newRascal)
    }).catch(err=>{
        console.log(err)
        res.json(err)
    })
})
router.put("/update",tokenAuth,(req,res)=>{
    Rascal.update(req.body,{where:{UserId:req.user.id}}).then(updatedRascal=>{
        res.json(updatedRascal)
    }).catch(err=>{
        console.log(err)
        res.json(err)
    })
})
router.delete('/deletethisroute',(req,res)=>{
    // this will delete ALL data, including users
    sequelize.sync({ force: true })
})
module.exports = router