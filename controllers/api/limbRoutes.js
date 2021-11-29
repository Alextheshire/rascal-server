const express = require('express');
const router = express.Router();
const { User, Rascal, Limb } = require('../../models');
const tokenAuth = require("../../middleware/tokenAuth")
const sequelize = require("../../config/connection.js")

router.get('/rascal/:id',(req,res)=>{
    Limb.findAll({RascalId:req.params.id}).then(limbs=>{
        res.json(limbs)
    }).catch(err=>{
        console.log(err)
        res.json(err)
    })
})

module.exports = router